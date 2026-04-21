import { BrowserRouter as Router } from "react-router-dom"
import AuthRoutes from "./auth-routes"
import UnAuthAppRoutes from "./unauth-routes"

export default function AppRoutes() {
  const token = "1234"

  return <Router>{token ? <AuthRoutes /> : <UnAuthAppRoutes />}</Router>
}
