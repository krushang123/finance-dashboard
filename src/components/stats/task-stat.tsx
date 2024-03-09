import { VStack, Text, HStack, StackDivider } from "@chakra-ui/layout"
import { SlClock } from "react-icons/sl"

import IconSquare from "components/icon-square"
import StatContainer from "./stat-container"

const TaskStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontWeight='semibold' color='#7E8B9F'>
          Tasks Status
        </Text>

        <HStack
          spacing={2}
          align='center'
          divider={<StackDivider borderColor='gray.200' />}
        >
          <VStack spacing={0} align='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
              12
            </Text>

            <Text fontWeight='semibold' color='#7E8B9F'>
              Planned
            </Text>
          </VStack>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
              32
            </Text>

            <Text fontWeight='semibold' color='#7E8B9F'>
              Completed
            </Text>
          </VStack>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
              21
            </Text>

            <Text fontWeight='semibold' color='#7E8B9F'>
              Expired
            </Text>
          </VStack>
        </HStack>
      </VStack>
    }
    rightChildren={<IconSquare icon={SlClock} />}
  />
)

export default TaskStat
