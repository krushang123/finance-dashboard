import { extendTheme } from "@chakra-ui/react"

// Component style overrides
import Button from "theme/components/button"
// Foundational style overrides
import colors from "theme/foundations/colors"
// Global style overrides
import styles from "theme/styles"

const customTheme = extendTheme(
  {
    styles,
    colors,
    fonts: {
      heading: "Montserrat, sans-serif",
      body: "Montserrat, sans-serif",
    },
  },
  {
    components: {
      Button,
    },
  },
)

export default customTheme
