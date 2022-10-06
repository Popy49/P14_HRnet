import { useContext, useState } from "react"
import { EmployeeContext } from "../utils/context/EmployeeProvider"
import { departments, states } from "../utils/state"
import { Modal } from "modal-react-library"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from "react-select"

/**
 * Function to validated inputs form
 *
 * @param object of employee inputs
 * @return object of error
 * @author JP
 * @version 1.0
 */

const validatedFields = (props) => {
  let errors = {}

  if (props.firstname.toString().length < 4 || props.firstname === null) {
    errors.firstname = "Username is required"
  }
  if (props.lastname.toString().length < 2 || props.lastname === null) {
    errors.lastname = "Lastname is required"
  }
  if (
    /^(?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])[-/.](?:19\d{2}|20[01][0-9]|2020)$/.test(
      props.birthdate
    )
  ) {
    errors.birthdate = "Wrong date format, please enter YYYY-MM-DD"
  }
  if (
    /^(?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])[-/.](?:19\d{2}|20[01][0-9]|2020)$/.test(
      props.startdate
    )
  ) {
    errors.startdate = "Wrong date format, please enter YYYY-MM-DD"
  }
  if (isNaN(props.zipCode)) {
    errors.zipCode = "Veuillez entrer un nombre"
  }
  return errors
}

/**
 * Display Form
 *
 * @return void
 * @author JP
 * @version 1.0
 */

function Form() {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [birthDate, setBirthDate] = useState(new Date())
  const { employees, addEmployee } = useContext(EmployeeContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const employee = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      birthdate: e.target.birthdate.value,
      startdate: e.target.startdate.value,
      street: e.target.street.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipCode: e.target.zipCode.value,
      department: e.target.department.value,
    }

    let errors = validatedFields(employee)

    if (Object.keys(errors).length === 0) {
      setModalIsActive(true)
      addEmployee(employee)
    }
  }

  return (
    <div>
      <form className="formNewEmployee flexColumn " onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="firstname">
          <div className="formName">First Name</div>
          <input
            type="text"
            minLength="2"
            id="firstname"
            name="firstname"
            required
          />
        </label>
        <label className="formLabel" htmlFor="lastname">
          <div className="formName">Last Name</div>
          <input
            type="text"
            minLength="2"
            id="lastname"
            name="lastname"
            required
          />
        </label>
        <label className="formLabel" htmlFor="birthdate">
          <div className="formName">Date of Birth</div>
          <DatePicker
            className="inputField"
            id="birthdate"
            name="birthdate"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />
        </label>
        <label className="formLabel" htmlFor="startdate">
          <div className="formName">Start date</div>{" "}
          <DatePicker
            className="inputField"
            id="startdate"
            name="startdate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </label>

        <div className="address">
          <div>Address</div>
          <label className="formLabel" htmlFor="street">
            <div className="formName">Street</div>{" "}
            <input type="text" id="street" name="street" required></input>
          </label>
          <label className="formLabel" htmlFor="city">
            <div className="formName">City</div>{" "}
            <input type="text" id="city" name="city" required></input>
          </label>
          <label className="formLabel" htmlFor="state">
            <div className="formName">State </div>
            <Select options={states} id="state" name="state" />
          </label>
          <label className="formLabel" htmlFor="zipCode">
            <div className="formName">Zip code </div>
            <input type="number" id="zipCode" name="zipCode"></input>
          </label>
        </div>
        <label className="formLabel" htmlFor="department">
          <div className="formName">Department </div>
          <Select options={departments} id="department" name="department" />
        </label>
        <button className="formSubmitButton" type="submit">
          Envoyer
        </button>
        {modalIsActive && (
          <Modal
            buttonType="submit"
            buttonText="SUBMIT"
            htmlTextModal="Employee created"
            modalIsActive={modalIsActive}
            handleActiveModal={setModalIsActive}
          />
        )}
      </form>
    </div>
  )
}

export default Form
