import { type ComponentStyleConfig } from "@chakra-ui/react"

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    color: "#FFFFFF",
    fontWeight: 500,
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {},

  // default values for `size` and `variant`
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
}

export default Button
