import { Grid } from "@nextui-org/react"
import { Suspense } from "react"
import { useIsMobile } from "src/hooks/useIsMobile"
import { MabuFloatingButton } from "./MabuFloatingButton"
import { MabuModal } from "./MabuModal"
import { MabuSearch } from "./MabuSearch"
import { SelectedMabu } from "./SelectedMabu"
import { SelectedMabuSkeleton } from "./SelectedMabuSkeleton"

export const Mabu = () => {
  const isMobile = useIsMobile()

  return (
    <Grid.Container css={{ marginTop: 20, position: "relative" }}>
      <Grid.Container
        direction="column"
        css={{
          pr: isMobile ? 0 : 30,
          w: isMobile ? "100%" : "50%",
          mw: 768,
        }}
      >
        <Suspense fallback={<SelectedMabuSkeleton />}>
          <SelectedMabu />
        </Suspense>
      </Grid.Container>
      {!isMobile ? (
        <Grid.Container
          xs={6}
          css={{
            borderLeft: "1px solid #eaeaea",
            pl: 30,
          }}
          direction="column"
        >
          <MabuSearch />
        </Grid.Container>
      ) : (
        <>
          <MabuFloatingButton />
          <MabuModal />
        </>
      )}
    </Grid.Container>
  )
}
