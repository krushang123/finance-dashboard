import { VStack, Text, HStack, StackDivider } from "@chakra-ui/layout"

import IconSquare from "components/icon-square"
import StatContainer from "./stat-container"

const TaskStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontSize='14px' fontWeight='semibold' color='#7E8B9F'>
          Tasks Status
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
              Plan
            </Text>
          </VStack>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='20px' fontWeight='bold'>
              32
            </Text>

            <Text fontSize='11px' fontWeight='semibold' color='#7E8B9F'>
              Complete
            </Text>
          </VStack>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='20px' fontWeight='bold'>
              21
            </Text>

            <Text fontSize='11px' fontWeight='semibold' color='#7E8B9F'>
              Expire
            </Text>
          </VStack>
        </HStack>
      </VStack>
    }
    rightChildren={<IconSquare icon='icon-clock-circle' />}
  />
)

export default TaskStat
