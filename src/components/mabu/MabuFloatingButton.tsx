import { Button } from "@nextui-org/react"
import { ChevronUp } from "react-iconly"
import { useMabuFacade } from "src/hooks/facade/useMabuFacade"
import { COLORS } from "src/style/theme"

export const MabuFloatingButton = () => {
  const { openMabuModal } = useMabuFacade()

  return (
    <Button
      css={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(3.5px)",
        webkitBackdropFilter: "blur(3.5px )",
        backgroundColor: `${COLORS.primary}8D`,
      }}
      auto
      icon={
        <ChevronUp
          set="broken"
          style={{ position: "static", color: "white" }}
        />
      }
      onPress={openMabuModal}
    />
  )
}
