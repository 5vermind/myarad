import { Button, Modal } from "@nextui-org/react"
import { useMabuFacade } from "src/hooks/facade/useMabuFacade"
import { useStore } from "src/store/zustandProvider"
import { MabuSearch } from "./MabuSearch"

export const MabuModal = () => {
  const open = useStore(({ mabu }) => mabu.modalOpen)
  const { closeMabuModal } = useMabuFacade()

  return (
    <Modal
      css={{
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
      }}
      blur
      open={open}
      onClose={closeMabuModal}
      scroll
      preventClose
    >
      <Modal.Body
        css={{
          minWidth: 300,
        }}
      >
        <MabuSearch />
      </Modal.Body>
      <Modal.Footer>
        <Button
          css={{
            minWidth: 100,
          }}
          color="error"
          bordered
          onPress={closeMabuModal}
          // size="sm"
        >
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
