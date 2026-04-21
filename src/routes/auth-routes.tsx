import ShopView from "@/pages/shop/views"
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

export default function AuthRoutes() {
  return (
    <Routes>
      <Route
        path="/app/shop"
        element={
          <React.Suspense fallback={<></>}>
            <ShopView />
          </React.Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/app/shop" />} />
    </Routes>
  )
}
