import { type ReactNode } from "react"

import { Wrap } from "@chakra-ui/layout"

interface StatContainerProps {
  leftChildren: ReactNode
  rightChildren: ReactNode
}

const StatContainer = (props: StatContainerProps) => {
  const { leftChildren, rightChildren } = props

  return (
    <Wrap
      gap={0}
      bgColor='white'
      px={5}
      py={6}
      rounded='md'
      justify='space-between'
      align='center'
    >
      {leftChildren}
      {rightChildren}
    </Wrap>
  )
}

export default StatContainer
