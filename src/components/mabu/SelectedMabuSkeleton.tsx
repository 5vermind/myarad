import { Card, Grid } from "@nextui-org/react"
import { Skeleton } from "../common/Skeleton"

export const SelectedMabuSkeleton = () => (
  <Card
    css={{
      bgColor: "rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(3.5px)",
      webkitBackdropFilter: "blur(3.5px)",
      position: "sticky",
      top: 50,
      maxH: 800,
    }}
  >
    <Card.Header>
      <Skeleton
        width={400}
        height={54}
        css={{
          marginBottom: "0.625rem",
        }}
      />
    </Card.Header>
    <Card.Divider />
    <Card.Body>
      <Grid.Container direction="column">
        <Grid css={{ width: "fit-content", alignSelf: "end" }}>
          <Skeleton
            width={100}
            height={36}
            css={{
              marginBottom: "0.625rem",
            }}
          />
        </Grid>
        <Grid
          css={{
            gap: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Skeleton width={100} height={24} />
          <Skeleton width={150} height={24} />
          <Skeleton width={150} height={24} />
        </Grid>
      </Grid.Container>
    </Card.Body>
  </Card>
)
