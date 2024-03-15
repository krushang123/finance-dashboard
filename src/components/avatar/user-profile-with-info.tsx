import { Stack, Text } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/avatar"

interface UserAvatarWithInfoProps {
  expanded: boolean
  isDesktop: boolean
}

const UserProfileWithInfo = (props: UserAvatarWithInfoProps) => {
  const { isDesktop, expanded } = props

  return (
    <Stack spacing={4} direction='row' align='center'>
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

      <Stack
        spacing={0}
        align='flex-start'
        color='white'
        hidden={isDesktop && !expanded}
      >
        <Text fontSize='sm' fontWeight='semibold' noOfLines={1}>
          Dan Abrahmov
        </Text>
        <Text noOfLines={1} fontSize='xs'>
          Lorem, ipsum.
        </Text>
      </Stack>
    </Stack>
  )
}

export default UserProfileWithInfo
