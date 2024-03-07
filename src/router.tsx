import { lazy, Suspense } from "react"

import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import("pages/home"))

const Router = () => (
  <Suspense fallback={<>...</>}>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </Suspense>
)

export default Router
