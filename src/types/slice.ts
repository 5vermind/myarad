import { Setter } from "./utils"

export interface MabuState {
  selectedId: string
  modalOpen: boolean
}

export type MabuActions = Setter<MabuState>

export type MabuSlice = {
  mabu: MabuState
  mabuActions: MabuActions
}
