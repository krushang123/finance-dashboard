import { type ReactNode } from "react"

import { Flex } from "@chakra-ui/layout"

interface StatContainerProps {
  leftChildren: ReactNode
  rightChildren: ReactNode
}

const StatContainer = (props: StatContainerProps) => {
  const { leftChildren, rightChildren } = props

  return (
    <Flex
      gap={2}
      bgColor='white'
      p={4}
      rounded='lg'
      justify='space-between'
      align='center'
    >
      {leftChildren}
      {rightChildren}
    </Flex>
  )
}

export default StatContainer
