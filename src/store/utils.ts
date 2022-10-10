import produce from "immer"
import { Get, Setter, Updater, ValueOrUpdater } from "src/types/utils"
import { Mutate, StoreApi } from "zustand"
import { Slice, Store } from "src/types/store"

const handleDraft =
  <S extends keyof Store>(slice: S) =>
  <T extends keyof Store[S]>(
    key: T,
    valueOrUpdater: ValueOrUpdater<Store[S][T]>
  ) =>
  (state: Store) =>
    produce(state, (draft: Store) => {
      draft[slice][key] =
        typeof valueOrUpdater === "function"
          ? (valueOrUpdater as Updater<Store[S][T]>)(draft[slice][key])
          : valueOrUpdater
    })

export const stateSetter =
  <S extends keyof Store>(
    slice: S,
    set: Get<Mutate<StoreApi<Store>, []>, "setState", undefined>
  ) =>
  <T extends keyof Store[S]>(key: T) =>
  (valueOrUpdater: ValueOrUpdater<Store[S][T]>) =>
    set(handleDraft(slice)(key, valueOrUpdater))

export const actionGenerator = <T extends keyof Store>(
  key: T,
  states: Store[T],
  set: Get<Mutate<StoreApi<Store>, []>, "setState", undefined>
): Setter<Store[T]> => {
  const setter = stateSetter(key, set)

  const actions: any = {}

  Object.keys(states).forEach((state) => {
    actions[`set${state[0].toUpperCase()}${state.slice(1)}`] = setter(
      state as keyof Store[T]
    )
  })

  return actions as Setter<Store[T]>
}

export const stateCreator =
  <S extends Slice>(key: keyof Store, init: Store[keyof Store]) =>
  (set: Get<Mutate<StoreApi<Store>, []>, "setState", undefined>) => {
    const actions = actionGenerator(key, init, set)
    const slice = {
      [key]: init,
      [`${String(key)}Actions`]: actions,
    }

    return slice as unknown as S
  }
