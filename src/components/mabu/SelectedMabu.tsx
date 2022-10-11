/* eslint-disable no-nested-ternary */
import { Card, Grid, Loading, Text } from "@nextui-org/react"
import { useStore } from "src/store/zustandProvider"
import { OneMabuResponse } from "src/types/mabu"
import useSWR from "swr"

export const SelectedMabu = () => {
  const selectedId = useStore(({ mabu }) => mabu.selectedId)
  const { data } = useSWR<OneMabuResponse>(
    selectedId !== "" && `/mabu/${selectedId}`
  )

  return selectedId !== "" ? (
    data ? (
      <Card
        css={{
          bgColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(3.5px)",
          webkitBackdropFilter: "blur(3.5px )",
          position: "sticky",
          top: 50,
        }}
      >
        <Card.Header>
          <Text h2>{data.itemName}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Grid.Container direction="column">
            <Grid css={{ width: "fit-content", alignSelf: "end" }}>
              <Text h3>
                {data.slots.map((slot) => slot.slotName).join(", ")}
              </Text>
            </Grid>
            <Grid>
              {data.enchant.map((e, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text key={`enchant-${index}`}>
                  <Text>+{e.upgrade}</Text>
                  {e.status ? (
                    e.status.map((s, statusIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Text key={`enchant-${index}-${statusIndex}`}>
                        {s.name} +{s.value}
                      </Text>
                    ))
                  ) : (
                    <Text>{e.explain}</Text>
                  )}
                </Text>
              ))}
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    ) : (
      <Loading />
    )
  ) : (
    <Text h1 css={{ color: "white" }}>
      마부를 골라보세요
    </Text>
  )
}
