export const SLOT_TYPE = {
  armour: "방어구",
  weapon: "무기",
  accessory: "장신구",
  special: "특수장비",
} as const

export type SlotType = keyof typeof SLOT_TYPE

export const isSlotType = (slotType: string | number): slotType is SlotType =>
  Object.keys(SLOT_TYPE).includes(
    typeof slotType === "number" ? slotType.toString() : slotType
  )

export const SLOT_TYPE_LIST = [
  {
    name: SLOT_TYPE.armour,
    slotTypeId: "armour",
  },
  {
    name: SLOT_TYPE.weapon,
    slotTypeId: "weapon",
  },
  {
    name: SLOT_TYPE.accessory,
    slotTypeId: "accessory",
  },
  {
    name: SLOT_TYPE.special,
    slotTypeId: "special",
  },
]

export type SlotId =
  | "JACKET"
  | "PANTS"
  | "SHOES"
  | "SHOULDER"
  | "WAIST"
  | "WEAPON"
  | "RING"
  | "WRIST"
  | "AMULET"
  | "EARRING"
  | "SUPPORT"
  | "MAGIC_STON"

export const SLOTS: {
  [key in SlotType]: {
    slotName: string
    slotId: SlotId
  }[]
} = {
  armour: [
    {
      slotId: "JACKET",
      slotName: "상의",
    },
    {
      slotId: "PANTS",
      slotName: "하의",
    },
    {
      slotId: "SHOULDER",
      slotName: "머리어깨",
    },
    {
      slotId: "WAIST",
      slotName: "허리",
    },
    {
      slotId: "SHOES",
      slotName: "신발",
    },
  ],
  accessory: [
    {
      slotId: "WRIST",
      slotName: "팔찌",
    },
    {
      slotId: "AMULET",
      slotName: "목걸이",
    },
    {
      slotId: "RING",
      slotName: "반지",
    },
  ],
  special: [
    {
      slotId: "SUPPORT",
      slotName: "보조장비",
    },
    {
      slotId: "MAGIC_STON",
      slotName: "마법석",
    },
    {
      slotId: "EARRING",
      slotName: "귀걸이",
    },
  ],
  weapon: [
    {
      slotId: "WEAPON",
      slotName: "무기",
    },
  ],
}

export const SLOTS_NAME: {
  [key in SlotId]: string
} = {
  JACKET: "상의",
  PANTS: "하의",
  SHOES: "신발",
  SHOULDER: "머리어깨",
  WAIST: "허리",
  EARRING: "귀걸이",
  MAGIC_STON: "마법석",
  RING: "반지",
  SUPPORT: "보조장비",
  WEAPON: "무기",
  WRIST: "팔찌",
  AMULET: "목걸이",
}

export const isSlotId = (slotId: string | number): slotId is SlotId =>
  Object.values(SLOTS).some((slotType) =>
    slotType.some((slot) => slot.slotId === slotId)
  )
