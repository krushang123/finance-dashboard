import { Square, type SquareProps } from "@chakra-ui/layout"

interface IconSquareProps extends SquareProps {
  icon: string
}

const IconSquare = (props: IconSquareProps) => {
  const { icon } = props

  return (
    <Square size='64px' bgColor='#EEF2F5' rounded='lg'>
      <i className={icon} style={{ fontSize: "30px", color: "#007EF3" }} />
    </Square>
  )
}

export default IconSquare
