import { Dropdown } from "@nextui-org/react"
import { useState } from "react"
import {
  SlotType,
  SLOT_TYPE,
  isSlotType,
  SLOTS,
  SLOT_TYPE_LIST,
  SlotId,
  isSlotId,
} from "src/constants/SLOTS"
import { useMabuFacade } from "src/hooks/facade/useMabuFacade"
import { useStore } from "src/store/zustandProvider"
import { Box } from "../common/Box"

export const MabuSelect = () => {
  const [slotType, setSlotType] = useState<SlotType>("armour")
  const slotId = useStore(({ mabu }) => mabu.slotId)
  const { setSlotId } = useMabuFacade()

  return (
    <Box css={{ height: 40 }}>
      <Dropdown>
        <Dropdown.Button
          css={{
            mr: 16,
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
          color="gradient"
          bordered
        >
          {SLOT_TYPE[slotType]}
        </Dropdown.Button>
        <Dropdown.Menu
          selectionMode="single"
          selectedKeys={[slotType]}
          onSelectionChange={(value) => {
            const newSlotType = [...value][0]
            if (isSlotType(newSlotType)) {
              setSlotType(newSlotType)
              setSlotId(SLOTS[newSlotType][0].slotId)
            }
          }}
          variant="solid"
        >
          {SLOT_TYPE_LIST.map((item) => (
            <Dropdown.Item key={item.slotTypeId}>{item.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {slotId && (
        <Dropdown>
          <Dropdown.Button
            color="gradient"
            bordered
            css={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          >
            {
              (
                SLOTS[slotType] as unknown as {
                  slotId: SlotId
                  slotName: string
                }[]
              ).filter((i) => i.slotId === slotId)[0].slotName
            }
          </Dropdown.Button>
          <Dropdown.Menu
            selectionMode="single"
            selectedKeys={[slotId]}
            onSelectionChange={(value) => {
              const newSlot = [...value][0]
              if (isSlotId(newSlot)) {
                setSlotId(newSlot)
              }
            }}
            variant="solid"
          >
            {SLOTS[slotType].map((item) => (
              <Dropdown.Item key={item.slotId}>{item.slotName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Box>
  )
}
