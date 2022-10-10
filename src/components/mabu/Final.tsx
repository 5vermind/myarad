import { Loading } from "@nextui-org/react"
import { MabuResponse } from "src/types/mabu"
import useSWR from "swr"
import { MabuImage } from "./MabuImage"

export const Final = () => {
  const { data } = useSWR<MabuResponse>("/mabu?grade=final")

  return data ? (
    <>
      {data.map((mabu) => (
        <MabuImage
          itemId={mabu.itemId}
          key={mabu.itemId}
          itemName={mabu.itemName}
        />
      ))}
    </>
  ) : (
    <Loading />
  )
}
