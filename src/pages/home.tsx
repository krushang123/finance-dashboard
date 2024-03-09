import { VStack, SimpleGrid } from "@chakra-ui/layout"

import StatsGrid from "components/stats/stats-grid"
import Toolbar from "components/toolbar"
import TaskStatusChart from "components/task-status-chart"
import StatusTasksChecklistChart from "components/status-tasks-checklist-chart"
import StatusStagesChecklistChart from "components/status-stages-checklist"
import TaskStatusDistributionTeam from "components/task-status-distribution-team"

const Home = () => (
  <VStack spacing={8} w='full'>
    <StatsGrid />
    <Toolbar />

    <SimpleGrid spacing={10} columns={2} w='full'>
      <TaskStatusChart />
      <StatusTasksChecklistChart />
      <StatusStagesChecklistChart />
      <TaskStatusDistributionTeam />
    </SimpleGrid>
  </VStack>
)

export default Home
