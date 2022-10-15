import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  const mobile = useMediaQuery({ query: "(max-width: 768px)" })

  useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])

  return isMobile
}
