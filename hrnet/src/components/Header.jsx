import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"

function Header() {
  return (
    <div>
      <div className="header flex-center">
        <Link to={`/`} className="flex-center">
          <img className="header__logoImage" src={logo} alt="HRnet Logo" />
        </Link>
        <h1 className="header__title">HRnet</h1>
      </div>
    </div>
  )
}

export default Header
