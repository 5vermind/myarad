import { SlotId } from "src/constants/SLOTS"
import { Setter } from "./utils"

export interface MabuState {
  selectedId: string
  modalOpen: boolean
  slotId: SlotId | null
}

export type MabuActions = Setter<MabuState>

export type MabuSlice = {
  mabu: MabuState
  mabuActions: MabuActions
}
