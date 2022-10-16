import { Grid, Text } from "@nextui-org/react"
import { Suspense, useMemo } from "react"
import { useIsMobile } from "src/hooks/useIsMobile"
import { MabuList } from "./MabuList"

export const MabuSearch = () => {
  const isMobile = useIsMobile()
  const textColor = useMemo(() => (isMobile ? "black" : "white"), [isMobile])

  return (
    <>
      <Grid.Container
        css={{
          maxW: "calc(100vw - 40px)",
        }}
      >
        <Grid xs={12}>
          <Text h3 css={{ color: textColor }}>
            종결
          </Text>
        </Grid>
        <Suspense fallback="i">
          <MabuList type="final" />
        </Suspense>
      </Grid.Container>
      {/* <Grid.Container
        css={{
          maxW: "calc(100vw - 40px)",
        }}
      >
        <Grid xs={12}>
          <Text h3 css={{ color: textColor }}>
            준종결
          </Text>
        </Grid>
        <Suspense fallback="i">
          <MabuList type="semi" />
        </Suspense>
      </Grid.Container> */}
    </>
  )
}
