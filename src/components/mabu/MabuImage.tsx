import { Text, Image, Card } from "@nextui-org/react"
import { useStore } from "src/store/zustandProvider"

interface MabuImageInterface {
  itemId: string
  itemName: string
}

export const MabuImage = ({ itemId, itemName }: MabuImageInterface) => {
  const setSelectedId = useStore(({ mabuActions }) => mabuActions.setSelectedId)

  return (
    <Card
      css={{
        margin: 2,
        padding: 2,
        flexDirection: "column",
        width: 100,
        maxWidth: 100,
        borderRadius: 5,
        bgColor: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(10px)",
      }}
      onClick={() => {
        setSelectedId(itemId)
      }}
      variant="bordered"
      isPressable
    >
      <Image
        src={`/images/${itemId}.png`}
        width={60}
        height={60}
        showSkeleton
        objectFit="fill"
        alt={`${itemName} 이미지`}
      />
      <Text
        css={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          wordBreak: "break-all",
        }}
      >
        {itemName}
      </Text>
    </Card>
  )
}
