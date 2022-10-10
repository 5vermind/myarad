import { ReactNode } from "react"
import { Text } from "@nextui-org/react"
import { Box } from "../common/Box"
import { Topbar } from "./Topbar"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Box
    css={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Topbar />
    <Box
      css={{
        padding: 20,
      }}
    >
      {children}
    </Box>
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 20,
      }}
    >
      <Text>5vermind@gmail.com</Text>
      <Text>
        기능 지속적으로 추가중입니다. 건의사항, 오류 제보해주시면
        감사드리겠습니다.
      </Text>
      <Text>
        예정) 골든베릴, 이스핀즈, 기계혁명 보주 추가. 장비별 검색, 옵션별 검색,
        이름으로 검색
      </Text>
      <Text>
        예정) 검공아, 벨공아의 경우 api가 스증 +2%만 알려줘서 제가 직접 손으로
        추가할 예정입니다
      </Text>
    </Box>
  </Box>
)
