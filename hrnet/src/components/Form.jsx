import { useContext } from "react"
import { EmployeeContext } from "../utils/context/EmployeeProvider"
import states from "../utils/state"

function Form() {
  const { employee, addEmployee } = useContext(EmployeeContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const employee = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      birthdate: e.target.birthdate.value,
      startdate: e.target.startdate.value,
      department: e.target.state.value,
      street: e.target.street.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipCode: e.target.zipCode.value,
    }
    let employees = JSON.parse(localStorage.getItem("employees")) || []
    employees.push(employee)
    console.log(e.target.state.text)
    console.log(
      document.getElementById("state").options[
        document.getElementById("state").selectedIndex
      ].text
    )
    localStorage.setItem("employees", JSON.stringify(employees))
    // addEmployee(newEmployee)
  }

  return (
    <form className="formNewEmployee flexColumn " onSubmit={handleSubmit}>
      <label className="formLabel" htmlFor="firstname">
        First Name
        <input type="text" id="firstname" name="firstname" required />
      </label>
      <label className="formLabel" htmlFor="lastname">
        Last Name
        <input type="text" id="lastname" name="lastname" required />
      </label>
      <label className="formLabel" htmlFor="birthdate">
        Date of Birth
        <input type="date" id="birthdate" name="birthdate"></input>
      </label>
      <label className="formLabel" htmlFor="startdate">
        Start date <input type="date" id="startdate" name="startdate"></input>
      </label>
      <label className="formLabel" htmlFor="street">
        Street <input type="text" id="street" name="street"></input>
      </label>
      <label className="formLabel" htmlFor="city">
        City <input type="text" id="city" name="city"></input>
      </label>
      <label className="formLabel" htmlFor="state">
        State{" "}
        <select name="state" id="state">
          {/* <option value="">--Please choose an option--</option> */}
          {states.map((state) => (
            <option value={state.abbreviation}>{state.name}</option>
          ))}
        </select>
      </label>
      <label className="formLabel" htmlFor="zipCode">
        Zip code <input type="number" id="zipCode" name="zipCode"></input>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  )
}

export default Form
