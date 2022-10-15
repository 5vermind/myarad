import { Loading } from "@nextui-org/react"
import { MabuResponse } from "src/types/mabu"
import useSWR from "swr"
import { MabuImage } from "./MabuImage"

interface MabuListProps {
  type: "final" | "semi"
}

export const MabuList = ({ type }: MabuListProps) => {
  const { data } = useSWR<MabuResponse>(
    `/mabu?grade=${type}&itemTypeDetail=전문직업 재료`
  )

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
