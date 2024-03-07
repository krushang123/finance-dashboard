import { BrowserRouter } from "react-router-dom"

import Router from "router"
import Providers from "providers"

export const App = () => (
  <Providers>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Providers>
)
