import { Link } from "react-router-dom"

const PublicActions = () => {
  return (
    <>
      <Link to="/login" className="button">Login</Link>
      <Link to="/register" className="button">Register</Link>
    </>
  )
}

export default PublicActions