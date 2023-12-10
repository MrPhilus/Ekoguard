import { Outlet } from "react-router-dom"
import { useGuard } from "../hooks/useGuard"

const Protected = () => {
  const authorized = useGuard()

  if (authorized) return <Outlet />
}
export default Protected