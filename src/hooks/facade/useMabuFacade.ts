import { useCallback } from "react"
import { useStore } from "src/store/zustandProvider"
import shallow from "zustand/shallow"

export const useMabuFacade = () => {
  const setters = useStore(({ mabuActions }) => ({ ...mabuActions }), shallow)

  const openMabuModal = useCallback(() => {
    setters.setModalOpen(true)
  }, [setters])

  const closeMabuModal = useCallback(() => {
    setters.setModalOpen(false)
  }, [setters])

  return {
    ...setters,
    openMabuModal,
    closeMabuModal,
  }
}
