import { Text, Image, Card } from "@nextui-org/react"
import { getDownloadURL, ref } from "firebase/storage"
import { useEffect, useState } from "react"
import { useMabuFacade } from "src/hooks/facade/useMabuFacade"
import { storage } from "src/lib/firebase"
import { useStore } from "src/store/zustandProvider"
import { Skeleton } from "../common/Skeleton"

interface MabuCardProps {
  itemId: string
  itemName: string
}

export const MabuCard = ({ itemId, itemName }: MabuCardProps) => {
  const { setSelectedId, closeMabuModal } = useMabuFacade()
  const open = useStore(({ mabu }) => mabu.modalOpen)
  const [src, setSrc] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      const image = await getDownloadURL(ref(storage, `${itemId}.png`))
      setSrc(image)
    })()
  }, [itemId])

  return (
    <Card
      css={{
        margin: 2,
        padding: 2,
        flexDirection: "column",
        width: 100,
        maxWidth: 100,
        borderRadius: 5,
        bgColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
      }}
      onPress={() => {
        setSelectedId(itemId)
        if (open) {
          closeMabuModal()
        }
      }}
      variant="bordered"
      isPressable
    >
      {src ? (
        <Image
          src={src}
          width={50}
          height={50}
          showSkeleton
          objectFit="contain"
          alt={`${itemName} 이미지`}
          containerCss={{
            height: 60,
          }}
        />
      ) : (
        <Skeleton
          css={{
            width: 50,
            height: 50,
            alignSelf: "center",
            my: 5,
          }}
        />
      )}
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
