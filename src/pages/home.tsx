import { VStack } from "@chakra-ui/layout"

import StatsGrid from "components/stats/stats-grid"
import Toolbar from "components/toolbar"
import DashboardChartsGrid from "components/dashboard-charts/dashboard-charts-grid"

const Home = () => (
  <VStack spacing={5} w='full'>
    <StatsGrid />
    <Toolbar />
    <DashboardChartsGrid />
  </VStack>
)

export default Home
