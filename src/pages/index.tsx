import { Container } from "@nextui-org/react"
import type { NextPage } from "next"
import { LandingPage } from "src/components/landing/LandingPage"

const Home: NextPage = () => (
  <Container>
    <LandingPage />
  </Container>
)

export default Home
