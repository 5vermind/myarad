import { Grid, Text } from "@nextui-org/react"
import { Semi } from "./Semi"
import { Final } from "./Final"
import { SelectedMabu } from "./SelectedMabu"

export const Mabu = () => (
  <Grid.Container css={{ marginTop: 20 }}>
    <Grid.Container
      xs={6}
      css={{
        borderRight: "1px solid #eaeaea",
      }}
      direction="column"
    >
      <Grid.Container>
        <Grid xs={12}>
          <Text h3 css={{ color: "white" }}>
            종결
          </Text>
        </Grid>
        <Final />
      </Grid.Container>
      <Grid.Container>
        <Grid xs={12}>
          <Text h3 css={{ color: "white" }}>
            준종결
          </Text>
        </Grid>
        <Semi />
      </Grid.Container>
    </Grid.Container>
    <Grid.Container
      xs={6}
      direction="column"
      css={{
        pl: 50,
      }}
    >
      <SelectedMabu />
    </Grid.Container>
  </Grid.Container>
)
