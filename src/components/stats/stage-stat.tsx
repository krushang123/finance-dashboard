import { VStack, Text, HStack, StackDivider } from "@chakra-ui/layout"

import IconSquare from "components/icon-square"
import StatContainer from "./stat-container"

const StageStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontSize='13px' fontWeight='semibold' color='#7E8B9F'>
          Stages
        </Text>

        <HStack
          spacing={2}
          align='center'
          divider={<StackDivider borderColor='gray.200' />}
        >
          <VStack spacing={0} align='flex-start'>
            <Text fontSize='20px' fontWeight='bold'>
              12
            </Text>

            <Text fontSize='11px' fontWeight='semibold' color='#7E8B9F'>
              Main S.
            </Text>
          </VStack>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='20px' fontWeight='bold'>
              54
            </Text>

            <Text fontSize='11px' fontWeight='semibold' color='#7E8B9F'>
              Sub S.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    }
    rightChildren={<IconSquare icon='icon-align-right' />}
  />
)

export default StageStat
