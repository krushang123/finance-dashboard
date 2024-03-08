import { type ReactElement } from "react"

import { IconButton } from "@chakra-ui/button"
import { Tooltip } from "@chakra-ui/tooltip"

interface IconButtonWithTooltipProps {
  icon: ReactElement
  label: string
}

const IconButtonWithTooltip = (props: IconButtonWithTooltipProps) => {
  const { icon, label } = props

  return (
    <Tooltip label={label} hasArrow>
      <IconButton
        colorScheme='gray'
        fontSize='22px'
        aria-label={label}
        icon={icon}
      />
    </Tooltip>
  )
}

export default IconButtonWithTooltip
