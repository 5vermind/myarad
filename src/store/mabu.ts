import { MabuSlice } from "src/types/slice"
import { StateCreator } from "zustand"
import { stateCreator } from "./utils"

export const createMabuSlice: StateCreator<MabuSlice> = (set) =>
  stateCreator<MabuSlice>("mabu", {
    selectedId: "",
    modalOpen: false,
  })(set)
