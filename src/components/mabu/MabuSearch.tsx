import { Grid, Text } from "@nextui-org/react"
import { Suspense } from "react"
import { SLOTS_NAME } from "src/constants/SLOTS"
import { useStore } from "src/store/zustandProvider"
import { Skeleton } from "../common/Skeleton"
import { MabuList } from "./MabuList"

export const MabuSearch = () => {
  const slotId = useStore(({ mabu }) => mabu.slotId)

  return (
    <Grid.Container
      css={{
        maxW: "calc(100vw - 40px)",
      }}
    >
      <Grid xs={12}>
        <Text h3>{slotId && SLOTS_NAME[slotId]}</Text>
      </Grid>
      <Suspense fallback={<Skeleton width={100} height={100} />}>
        <MabuList type="final" />
      </Suspense>
    </Grid.Container>
  )
}
