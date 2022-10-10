import { Store } from "src/types/store"
import { StateCreator } from "zustand"
import { createMabuSlice } from "./mabu"

export const states: StateCreator<Store> = (...selector) => ({
  ...createMabuSlice(...selector),
})
