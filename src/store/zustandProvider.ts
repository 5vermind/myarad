import { useLayoutEffect } from "react"
import create, { StoreApi, UseBoundStore } from "zustand"
import createContext from "zustand/context"
import { Store } from "src/types/store"
import { states } from "./states"

export const initializeStore = (preloadedState = {}) =>
  create<Store>()((...selector) => ({
    ...preloadedState,
    ...states(...selector),
  }))

let store: UseBoundStore<StoreApi<Store>>

export const useCreateStore = (_initialState: Store) => {
  if (typeof window === "undefined") {
    return () => initializeStore(_initialState)
  }

  store = store ?? initializeStore(_initialState)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (_initialState && store()) {
      store.setState({
        ...store.getState(),
        ..._initialState,
      })
    }
  }, [_initialState])

  return () => store
}

const zustandContext = createContext<StoreApi<Store>>()
export const { Provider: StoreProvider, useStore } = zustandContext
