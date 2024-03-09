import { SimpleGrid } from "@chakra-ui/layout"

import TaskStatusChart from "./task-status-chart"
import TaskStatusDistributionTeam from "./task-status-distribution-team"
import TaskStatusDistributionUser from "./task-status-distribution-user"
import StatusTasksChecklistChart from "./status-tasks-checklist-chart"
import StatusStagesChecklistChart from "./status-stages-checklist-chart"

const DashboardChartsGrid = () => (
  <SimpleGrid spacing={10} columns={2} w='full'>
    <TaskStatusChart />
    <TaskStatusDistributionTeam />
    <TaskStatusDistributionUser />
    <StatusTasksChecklistChart />
    <StatusStagesChecklistChart />
  </SimpleGrid>
)

export default DashboardChartsGrid
