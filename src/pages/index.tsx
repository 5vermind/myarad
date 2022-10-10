import { Container } from "@nextui-org/react"
import type { NextPage } from "next"
import Head from "next/head"
import { LandingPage } from "src/components/landing/LandingPage"

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>던파마부</title>
      <meta name="description" content="던파 마부를 한눈에! " />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="던파마부" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dfmabu.vercel.app" />
      <meta property="og:article:author" content="던파마부" />
    </Head>
    <LandingPage />
  </Container>
)

export default Home
