import { VStack } from "@chakra-ui/layout"
import DashboardChartsGrid from "components/dashboard-charts/dashboard-charts-grid"

import StatsGrid from "components/stats/stats-grid"
import Toolbar from "components/toolbar"

const Home = () => (
  <VStack spacing={8} w='full'>
    <StatsGrid />
    <Toolbar />
    <DashboardChartsGrid />
  </VStack>
)

export default Home
