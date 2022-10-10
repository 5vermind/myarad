import { Key } from "react"
import { Union } from "runtypes/lib/types/union"
import { Literal } from "runtypes"

export type Nullable<T> = T | null

export type Get<T, K, F = never> = K extends keyof T ? T[K] : F

export type Updater<T> = (val: T) => T

export type ValueOrUpdater<T> = T | Updater<T>

export const isSafeKey = <T>(
  key: Key,
  object: T
): key is Exclude<keyof T, symbol> => key in object

export const unionToObject = <T extends string>(
  union: Union<[Literal<T>, ...Literal<T>[]]>
) =>
  union.alternatives
    .map((v) => v.value)
    .reduce((a, v) => ({ ...a, [v]: v }), {})

type TupleEntry<
  T extends readonly unknown[],
  I extends unknown[] = [],
  R = never
> = T extends readonly [infer Head, ...infer Tail]
  ? TupleEntry<Tail, [...I, unknown], R | [`${I["length"]}`, Head]>
  : R

type ObjectEntry<T extends {}> = T extends object
  ? { [K in keyof T]: [K, Required<T>[K]] }[keyof T] extends infer E
    ? E extends [infer K, infer V]
      ? K extends string | number
        ? [`${K}`, V]
        : never
      : never
    : never
  : never

export type Entry<T extends {}> = T extends readonly [unknown, ...unknown[]]
  ? TupleEntry<T>
  : T extends ReadonlyArray<infer U>
  ? [`${number}`, U]
  : ObjectEntry<T>

export function typedEntries<T extends {}>(object: T): ReadonlyArray<Entry<T>> {
  return Object.entries(object) as unknown as ReadonlyArray<Entry<T>>
}

export type Setter<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (
    valOrUpdater: ValueOrUpdater<T[K]>
  ) => void
}

export type StringUnionToString<T extends string> = { [K in T]: string }
