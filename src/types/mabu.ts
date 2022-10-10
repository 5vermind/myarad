export interface Mabu {
  itemId: string
  itemName: string
  enchant: {
    upgrade: number
    status?: { name: string; value: number }[]
    explain?: string
  }[]
  slots: {
    slotId: string
    slotName: string
  }[]
}

export type MabuResponse = Mabu[]
export type OneMabuResponse = Mabu
