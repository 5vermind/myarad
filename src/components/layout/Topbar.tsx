import { Link, Navbar } from "@nextui-org/react"
import Image from "next/image"

export const Topbar = () => (
  <Navbar variant="sticky" shouldHideOnScroll maxWidth="fluid">
    <Navbar.Content>던파마부</Navbar.Content>
    <Navbar.Content>
      <Link href="http://developers.neople.co.kr" target="_blank">
        <Image
          src="/neople_horizental.png"
          alt="neople"
          width={200}
          height={40}
        />
      </Link>
    </Navbar.Content>
  </Navbar>
)
