import * as React from "react"

import { ColorModeScript } from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client"

const container = document.getElementById("root")
if (container === null) throw new Error("Failed to find the root element")
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
  </React.StrictMode>,
)
