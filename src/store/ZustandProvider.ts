import { useLayoutEffect } from "react";
import create, { StoreApi, UseBoundStore } from "zustand";
import createContext from "zustand/context";
import type {State} from './types';

export const initializeStore = (preloadedState = {}) =>
  create<State>()((...selector) => ({
    ...preloadedState,
  }));

let store: UseBoundStore<StoreApi<State>>;

export const useCreateStore = (_initialState: State) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === "undefined") {
    return () => initializeStore(_initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(_initialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (_initialState && store()) {
      store.setState({
        ...store.getState(),
        ..._initialState,
      });
    }
  }, [_initialState]);

  return () => store;
};

const zustandContext = createContext<StoreApi<State>>();
export const { Provider: StoreProvider, useStore } = zustandContext;