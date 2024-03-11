import { VStack, Text, HStack, StackDivider } from "@chakra-ui/layout"

import AvatarList, { type User } from "components/avatar/user-avatar-list"
import StatContainer from "./stat-container"

const users: User[] = [
  {
    id: 1,
    name: "Dan Abrahmov",
    badgeContent: 12,
    src: "https://bit.ly/dan-abramov",
  },
  {
    id: 2,
    name: "Kola Tioluwani",
    badgeContent: 8,
    src: "https://bit.ly/tioluwani-kolawole",
  },
  {
    id: 3,
    name: "Kent Dodds",
    badgeContent: 2,
    src: "https://bit.ly/kent-c-dodds",
  },
]

const TeamStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontSize='14px' fontWeight='semibold' color='#7E8B9F'>
          Teams
        </Text>

        <HStack
          spacing={2}
          align='center'
          divider={<StackDivider borderColor='gray.200' />}
        >
          <Text fontSize='26px' fontWeight='bold'>
            22
          </Text>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='20px' fontWeight='bold'>
              65
            </Text>

            <Text fontSize='11px' fontWeight='semibold' color='#7E8B9F'>
              Members
            </Text>
          </VStack>
        </HStack>
      </VStack>
    }
    rightChildren={<AvatarList users={users} />}
  />
)

export default TeamStat
