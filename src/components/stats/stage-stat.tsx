import { VStack, Text, HStack, StackDivider } from "@chakra-ui/layout"
import { RiMenu3Fill } from "react-icons/ri"

import IconSquare from "components/icon-square"
import StatContainer from "./stat-container"

const StageStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontWeight='semibold' color='#7E8B9F'>
          Stages
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
              Main S.
            </Text>
          </VStack>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
              54
            </Text>

            <Text fontWeight='semibold' color='#7E8B9F'>
              Sub S.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    }
    rightChildren={<IconSquare icon={RiMenu3Fill} />}
  />
)

export default StageStat
