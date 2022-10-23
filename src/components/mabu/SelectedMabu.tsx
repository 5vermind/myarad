/* eslint-disable no-nested-ternary */
import { Card, Grid, Loading, Text } from "@nextui-org/react"
import { compressStatus } from "src/lib/util"
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
          // bgColor: "rgba(255, 255, 255, 0.3)",
          // backdropFilter: "blur(3.5px)",
          // webkitBackdropFilter: "blur(3.5px)",
          position: "sticky",
          top: 50,
          maxH: 800,
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
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
                  {e.explain ?? ""}
                  {e.reinforceSkill
                    ? e.reinforceSkill.map(
                        (job) =>
                          `${job.jobName} ${job.skills.map(
                            (skill) => `${skill.name} +${skill.value}`
                          )} `
                      )
                    : ""}
                  {e.status ? (
                    compressStatus(e.status).map((s, statusIndex) => (
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
    <Text h1>마부를 골라보세요</Text>
  )
}
