import PropTypes from "prop-types"
import Form from "../components/Form"
import { Link } from "react-router-dom"

/**
 * Display Employee creation page
 *
 * @return void
 * @author JP
 * @version 1.0
 */

function CreateEmployee() {
  return (
    <main>
      <Link to={`/EmployeeList`} className="main-nav-item flex-center">
        <span>View Current Employees</span>
      </Link>
      <h2>Create Employee</h2>
      <Form />
    </main>
  )
}

export default CreateEmployee
