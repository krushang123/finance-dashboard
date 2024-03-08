import { VStack, Text, HStack, StackDivider } from "@chakra-ui/layout"

import AvatarList, { type User } from "components/avatar/user-avatar-list"
import StatContainer from "./stat-container"

const users: User[] = [
  { id: 1, name: "Dan Abrahmov", badgeContent: 12 },
  { id: 2, name: "Kola Tioluwani", badgeContent: 8 },
  { id: 3, name: "Kent Dodds", badgeContent: 2 },
]

const TeamStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontWeight='semibold' color='#7E8B9F'>
          Teams
        </Text>

        <HStack
          spacing={2}
          align='center'
          divider={<StackDivider borderColor='gray.200' />}
        >
          <Text fontSize='4xl' fontWeight='bold'>
            22
          </Text>

          <VStack spacing={0} align='flex-start'>
            <Text fontSize='2xl' fontWeight='bold'>
              65
            </Text>

            <Text fontWeight='semibold' color='#7E8B9F'>
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
