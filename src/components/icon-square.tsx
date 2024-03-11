import { Square, type SquareProps } from "@chakra-ui/layout"
import { Icon, type IconProps } from "@chakra-ui/icons"
import { type IconType } from "react-icons"
import { type ComponentWithAs } from "@chakra-ui/system"

interface IconSquareProps extends SquareProps {
  icon: IconType | ComponentWithAs<"svg", IconProps>
}

const IconSquare = (props: IconSquareProps) => {
  const { icon } = props

  return (
    <Square size='64px' bgColor='#EEF2F5' rounded='lg'>
      <Icon boxSize='26.3px' color='#007EF3' as={icon} />
    </Square>
  )
}

export default IconSquare
