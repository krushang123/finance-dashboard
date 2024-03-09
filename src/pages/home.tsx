import { VStack, SimpleGrid } from "@chakra-ui/layout"

import StatsGrid from "components/stats/stats-grid"
import Toolbar from "components/toolbar"
import TaskStatusChart from "components/task-status-chart"
import StatusTasksChecklistChart from "components/status-tasks-checklist-chart"

const Home = () => (
  <VStack spacing={8} w='full'>
    <StatsGrid />
    <Toolbar />

    <SimpleGrid spacing={10} columns={2} w='full'>
      <TaskStatusChart />
      <StatusTasksChecklistChart />
    </SimpleGrid>
  </VStack>
)

export default Home
