import { Avatar, AvatarBadge, Text } from "@chakra-ui/react"

interface AvatarProps {
  name: string
  src: string
  badgeContent: number
}

const UserAvatar = (props: AvatarProps) => {
  const { name, badgeContent, src } = props

  return (
    <Avatar w='34px' h='34px' name={name} src={src}>
      <AvatarBadge borderColor='white' bgColor='#EEF2F5' w='18px' h='19px'>
        <Text fontSize='11px' color='black'>
          {badgeContent}
        </Text>
      </AvatarBadge>
    </Avatar>
  )
}

export default UserAvatar
