import type { NextPage } from "next"
import { LandingPage } from "src/components/landing/LandingPage"
import { getMabuFromQuery } from "src/lib/mabu"
import { SWRConfig } from "swr"

interface Props {
  fallback: {
    [key: string]: any
  }
}

const Home: NextPage<Props> = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <LandingPage />
  </SWRConfig>
)

export default Home

export const getServerSideProps = async () => {
  const final = await getMabuFromQuery({
    grade: "final",
    itemTypeDetail: "전문직업 재료",
  })
  const semi = await getMabuFromQuery({
    grade: "semi",
    itemTypeDetail: "전문직업 재료",
  })
  return {
    props: {
      fallback: {
        [`/mabu?grade=final&itemTypeDetail=전문직업 재료`]: final,
        [`/mabu?grade=semi&itemTypeDetail=전문직업 재료`]: semi,
      },
    },
  }
}
