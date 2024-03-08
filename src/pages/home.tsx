import { VStack } from "@chakra-ui/layout"

import StatsGrid from "components/stats/stats-grid"
import Toolbar from "components/toolbar"

const Home = () => (
  <VStack spacing={8} w='full'>
    <StatsGrid />
    <Toolbar />
  </VStack>
)

export default Home
