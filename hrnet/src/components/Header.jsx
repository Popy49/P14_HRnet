import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <h1>HRnet</h1>
      <Link to={`/user`} className="main-nav-item flex-center">
        <span>View Current Employees</span>
      </Link>
    </div>
  )
}

export default Header
