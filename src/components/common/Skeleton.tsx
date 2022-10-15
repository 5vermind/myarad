import { CSS } from "@nextui-org/react"
import { loading } from "src/style/keyframe"
import { Box } from "./Box"

interface SkeletonProps {
  width?: number | string
  height?: number | string
  css?: CSS
}

export const Skeleton = ({ width, height, css }: SkeletonProps) => (
  <Box
    css={{
      height,
      width,
      backgroundColor: "rgba(255,255,255,0.1)",
      position: "relative",
      overflow: "hidden",
      borderRadius: 5,
      "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transform: "translateX(-100%)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
        animation: `${loading} 1.5s infinite`,
      },
      ...css,
    }}
  />
)
