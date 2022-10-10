import { Loading } from "@nextui-org/react"
import { MabuResponse } from "src/types/mabu"
import useSWR from "swr"
import { MabuImage } from "./MabuImage"

export const Semi = () => {
  const { data } = useSWR<MabuResponse>("/mabu?grade=semi")

  return data ? (
    <>
      {(data as MabuResponse).map((mabu) => (
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
