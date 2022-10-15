/* eslint-disable no-param-reassign */
import produce from "immer"
import { Stat } from "src/types/mabu"

const STAT = ["힘", "지능", "체력", "정신력"]
const COMPRESS_STAT = "힘/지능/체력/정신력"
const ATK = ["물리 공격력", "마법 공격력", "독립 공격력"]
const COMPRESS_ATK = "물리/마법/독립 공격력"
const CRITICAL = ["물리 크리티컬 히트", "마법 크리티컬 히트"]
const COMPRESS_CRITICAL = "물리/마법 크리티컬 히트"

// const COMPRESSED = {
//   STAT: COMPRESS_STAT,
//   ATK: COMPRESS_ATK,
//   CRITICAL: COMPRESS_CRITICAL,
// }

export const compressStatus = (statusArr: Stat[]) =>
  produce(statusArr, (draft) => {
    if (
      STAT.every((stat) =>
        statusArr.map((status) => status.name).includes(stat)
      )
    ) {
      const value = draft.find((i) => i.name === STAT[0])?.value
      draft = draft.filter(({ name }) => !STAT.includes(name))
      draft.push({ name: COMPRESS_STAT, value: value ?? 0 })
    }
    if (
      ATK.every((stat) => statusArr.map((status) => status.name).includes(stat))
    ) {
      const value = draft.find((i) => i.name === ATK[0])?.value
      draft = draft.filter(({ name }) => !ATK.includes(name))
      draft.push({ name: COMPRESS_ATK, value: value ?? 0 })
    }
    if (
      CRITICAL.every((stat) =>
        statusArr.map((status) => status.name).includes(stat)
      )
    ) {
      const value = draft.find((i) => i.name === CRITICAL[0])?.value
      draft = draft.filter(({ name }) => !CRITICAL.includes(name))
      draft.push({ name: COMPRESS_CRITICAL, value: value ?? 0 })
    }
    return draft
  })
