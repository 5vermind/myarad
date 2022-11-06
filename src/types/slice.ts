import { SlotId, SlotType } from "src/constants/SLOTS"
import { Setter } from "./utils"

export interface MabuState {
  selectedId: string
  modalOpen: boolean
  slotId: SlotId | null
  slotType: SlotType
}

export type MabuActions = Setter<MabuState>

export type MabuSlice = {
  mabu: MabuState
  mabuActions: MabuActions
}
