import { SimpleGrid } from "@chakra-ui/layout"

import TeamStat from "components/stats/team-stat"
import StageStat from "components/stats/stage-stat"
import ActivityStat from "components/stats/activity-stat"
import TaskStat from "components/stats/task-stat"

const StatsGrid = () => (
  <SimpleGrid
    p={5}
    spacing={5}
    columns={{ base: 1, sm: 2, xl: 4, "2xl": 4 }}
    w='full'
  >
    <TeamStat />
    <StageStat />
    <ActivityStat />
    <TaskStat />
  </SimpleGrid>
)

export default StatsGrid
