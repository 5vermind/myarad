import { Text, Card } from "@nextui-org/react"
import { getDownloadURL, ref } from "firebase/storage"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useMabuFacade } from "src/hooks/facade/useMabuFacade"
import { storage } from "src/lib/firebase"
import { useStore } from "src/store/zustandProvider"
import { Skeleton } from "../common/Skeleton"
import { Box } from "../common/Box"

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
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
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
      <Box
        css={{
          my: 5,
          justifyContent: "center",
        }}
      >
        {src ? (
          <Image
            src={src}
            width={50}
            height={50}
            objectFit="contain"
            alt={`${itemName} 이미지`}
          />
        ) : (
          <Skeleton
            css={{
              width: 50,
              height: 50,
            }}
          />
        )}
      </Box>
      <Text
        css={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          wordBreak: "break-all",
          mb: 6,
        }}
      >
        {itemName}
      </Text>
    </Card>
  )
}
