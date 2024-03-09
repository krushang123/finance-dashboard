import { Flex } from "@chakra-ui/layout"

interface HeaderProps {
  sidebarWidth: string
  headerHeight: string
}

const Header = (props: HeaderProps) => {
  const { sidebarWidth, headerHeight } = props

  return (
    <Flex
      as='header'
      h={headerHeight}
      maxW={`calc(100vw - ${sidebarWidth})`}
      pos='sticky'
      top={0}
      right={0}
      left={0}
      zIndex='sticky'
      justifyContent='space-between'
      align='center'
      px={{ base: 6, lg: 10 }}
      py={{ base: 2, lg: 6 }}
      boxShadow={{ base: "lg", lg: "none" }}
      bgColor='white'
    >
      <p>logo</p>
    </Flex>
  )
}

export default Header
