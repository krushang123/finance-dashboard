import { SimpleGrid } from "@chakra-ui/layout"

import TeamStat from "components/stats/team-stat"
import StageStat from "components/stats/stage-stat"
import ActivityStat from "components/stats/activity-stat"
import TaskStat from "components/stats/task-stat"

const StatsGrid = () => (
  <SimpleGrid spacing={10} columns={{ xl: 3, "2xl": 4 }} w='full'>
    <TeamStat />
    <StageStat />
    <ActivityStat />
    <TaskStat />
  </SimpleGrid>
)

export default StatsGrid
