import * as React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

export default function UnAuthAppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<> </>}>
            <></>
          </React.Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
