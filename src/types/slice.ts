import { Setter } from "./utils"

export interface MabuState {
  selectedId: string
}

export type MabuActions = Setter<MabuState>

export type MabuSlice = {
  mabu: MabuState
  mabuActions: MabuActions
}
