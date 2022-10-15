import { keyframes } from "@nextui-org/react"

export const loading = keyframes({
  "0%": {
    transform: "translateX(-150%)",
  },
  "50%": {
    transform: "translateX(-60%)",
  },
  "100%": {
    transform: "translate(150%)",
  },
})
