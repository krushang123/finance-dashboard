import { HStack } from "@chakra-ui/layout"

import UserAvatar from "./user-avatar"

export interface User {
  id: number
  name: string
  badgeContent: number
}

interface AvatarListProps {
  users: User[]
}

const AvatarList = (props: AvatarListProps) => {
  const { users } = props

  return (
    <HStack spacing={4}>
      {users.map((user) => (
        <UserAvatar
          key={user.id}
          name={user.name}
          badgeContent={user.badgeContent}
        />
      ))}
    </HStack>
  )
}

export default AvatarList
