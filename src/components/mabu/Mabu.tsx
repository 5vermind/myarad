import { Grid } from "@nextui-org/react"
import { Suspense } from "react"
import { useIsMobile } from "src/hooks/useIsMobile"
import { Box } from "../common/Box"
import { MabuFloatingButton } from "./MabuFloatingButton"
import { MabuModal } from "./MabuModal"
import { MabuSearch } from "./MabuSearch"
import { MabuSelect } from "./MabuSelect"
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
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid rgb(108, 122, 137)",
            pl: 30,
            width: "50%",
            gap: "16px",
          }}
        >
          <MabuSelect />
          <MabuSearch />
        </Box>
      ) : (
        <>
          <MabuFloatingButton />
          <MabuModal />
        </>
      )}
    </Grid.Container>
  )
}
