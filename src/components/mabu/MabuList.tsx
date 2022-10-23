/* eslint-disable no-nested-ternary */
import { Loading } from "@nextui-org/react"
import { useStore } from "src/store/zustandProvider"
import { MabuResponse } from "src/types/mabu"
import useSWR from "swr"
import { MabuCard } from "./MabuCard"

interface MabuListProps {
  type: "final" | "semi"
}

export const MabuList = ({ type }: MabuListProps) => {
  const slotId = useStore(({ mabu }) => mabu.slotId)
  const { data } = useSWR<MabuResponse>(
    slotId &&
      `/mabu?grade=${type}&itemTypeDetail=전문직업 재료&slotId=${slotId}`
  )

  return slotId ? (
    data ? (
      <>
        {data.map((mabu) => (
          <MabuCard
            itemId={mabu.itemId}
            itemName={mabu.itemName}
            key={mabu.itemId}
          />
        ))}
      </>
    ) : (
      <Loading />
    )
  ) : null
}
