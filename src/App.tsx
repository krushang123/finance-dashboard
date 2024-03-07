import { BrowserRouter } from "react-router-dom"

import Router from "router"
import Providers from "providers"
import Layout from "components/layout"

export const App = () => (
  <Providers>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </Providers>
)
