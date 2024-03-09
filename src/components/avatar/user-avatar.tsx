import { Avatar, AvatarBadge, Text } from "@chakra-ui/react"

interface AvatarProps {
  name: string
  badgeContent: number
}

const UserAvatar = (props: AvatarProps) => {
  const { name, badgeContent } = props

  return (
    <Avatar name={name}>
      <AvatarBadge borderColor='white' bgColor='#EEF2F5' boxSize='1.25em'>
        <Text fontSize='xs' color='black'>
          {badgeContent}
        </Text>
      </AvatarBadge>
    </Avatar>
  )
}

export default UserAvatar
