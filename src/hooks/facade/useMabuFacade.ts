import { useCallback } from "react"
import { useStore } from "src/store/zustandProvider"
import shallow from "zustand/shallow"

export const useMabuFacade = () => {
  const { setSelectedId, setModalOpen } = useStore(
    ({ mabuActions }) => ({ ...mabuActions }),
    shallow
  )

  const openMabuModal = useCallback(() => {
    setModalOpen(true)
  }, [setModalOpen])

  const closeMabuModal = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return {
    openMabuModal,
    closeMabuModal,
    setSelectedId,
  }
}
