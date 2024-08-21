import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../lib/hooks"

export const AuthorizedRoute = ({ children }) => {
  const { user } = useAuthContext()

  if (user == null) {
    return <Navigate to="/login" />
  } else {
    return children
  }

  // return authed ? children :
}
