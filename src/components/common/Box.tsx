import type { ReactNode } from "react"
import { CSS, styled } from "@nextui-org/react"

const StyledBox = styled("div", {
  boxSizing: "border-box",
  display: "flex",
})

type StyledBoxProps = {
  css?: CSS
  children?: ReactNode
}

export const Box = (props: StyledBoxProps) => <StyledBox {...props} />
