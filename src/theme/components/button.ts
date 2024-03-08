import { type ComponentStyleConfig } from "@chakra-ui/react"

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    color: "#FFFFFF",
    fontWeight: 500,
    borderRadius: "full",
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      bgGradient: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
      _hover: {
        bgColor: "secondaryColor",
        _disabled: {
          bgColor: "#DDDDDD",
          bgGradient: "none",
        },
      },
      _focus: {
        bgColor: "secondaryColor",
      },
      _disabled: {
        bgColor: "#DDDDDD",
        bgGradient: "none",
      },
    },
    outline: {
      borderColor: "#000000",
    },
    secondary: {
      bgColor: "secondaryColor",
    },
    tertiary: {
      color: "#000000",
      bgColor: "tertiaryColor",
      fontWeight: "medium",
      fontSize: "sm",
      _hover: { bgColor: "secondaryColor", color: "#ffffff" },
    },
    link: {
      textDecorationLine: "underline",
    },
  },

  // default values for `size` and `variant`
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
}

export default Button
