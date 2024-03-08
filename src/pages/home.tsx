import { VStack } from "@chakra-ui/layout"

import StatsGrid from "components/stats/stats-grid"

const Home = () => (
  <VStack spacing={8} w='full'>
    <StatsGrid />
  </VStack>
)

export default Home
