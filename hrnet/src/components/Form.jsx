import { useContext, useState } from "react"
import { EmployeeContext } from "../utils/context/EmployeeProvider"
import { departments, states } from "../utils/state"
import { Modal } from "modal-react-library"
import Test from "./Test"
import fields from "../utils/fields"

const validatedFields = (props) => {
  let errors = {}

  if (props.firstname.toString().length < 4 || props.firstname === null) {
    errors.firstname = "Username is required"
  }
  if (props.lastname.toString().length < 2 || props.lastname === null) {
    errors.lastname = "Lastname is required"
  }
  if (
    props.birthdate.test(
      /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    errors.birthdate = "Wrong date format, please enter YYYY-MM-DD"
  }
  if (
    props.startdate.test(
      /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    errors.startdate = "Wrong date format, please enter YYYY-MM-DD"
  }
  if (isNaN(props.zipCode)) {
    errors.zipCode = "Veuillez entrer un nombre"
  }

  return errors
}

function Form() {
  const [modalIsActive, setModalIsActive] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(modalIsActive)
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

    const errors = validatedFields(employee)

    if (Object.keys(errors).length === 0) {
      setModalIsActive(true)
      let employees = JSON.parse(localStorage.getItem("employees")) || []
      employees.push(employee)
      localStorage.setItem("employees", JSON.stringify(employees))
    }
  }

  return (
    <div>
      <form className="formNewEmployee flexColumn " onSubmit={handleSubmit}>
        {/* {fields.map((field) => (
          <label className="formLabel" htmlFor="firstname">
            <div className="formName">{field.name}</div>
            <input
              type={field.type}
              id={field.value}
              name={field.value}
              required
            />
          </label>
        ))} */}
        {/* {fields.map((field) => {
          if (field.type === "select") {
            return (
              <label className="formLabel" htmlFor={field.value}>
                <div className="formName">{field.name}</div>
                <select name={field.value} id={field.value}>
                  {states.map((state) => (
                    <option key={state.name} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </label>
            )
          } else if (field.type !== "false") {
            return (
              <label className="formLabel" htmlFor={field.value}>
                <div className="formName">{field.name}</div>
                <input
                  type={field.type}
                  id={field.value}
                  name={field.value}
                  required
                />
              </label>
            )
          }
        })} */}

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
          <input type="date" id="birthdate" name="birthdate"></input>
        </label>
        <label className="formLabel" htmlFor="startdate">
          <div className="formName">Start date</div>{" "}
          <input type="date" id="startdate" name="startdate"></input>
        </label>
        <div className="address">
          <div>Address</div>
          <label className="formLabel" htmlFor="street">
            <div className="formName">Street</div>{" "}
            <input type="text" id="street" name="street"></input>
          </label>
          <label className="formLabel" htmlFor="city">
            <div className="formName">City</div>{" "}
            <input type="text" id="city" name="city"></input>
          </label>
          <label className="formLabel" htmlFor="state">
            <div className="formName">State </div>
            <select name="state" id="state">
              {states.map((state) => (
                <option key={state.name} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>
          <label className="formLabel" htmlFor="zipCode">
            <div className="formName">Zip code </div>
            <input type="number" id="zipCode" name="zipCode"></input>
          </label>
        </div>
        <label className="formLabel" htmlFor="department">
          <div className="formName">Department </div>
          <select name="department" id="department">
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </label>
        <button className="formSubmitButton" type="submit">
          Envoyer
        </button>
        {modalIsActive && (
          <Modal
            buttonType="submit"
            buttonText="SUBMIT"
            htmlTextModal="bonjour"
            modalIsActive={modalIsActive}
            handleActiveModal={setModalIsActive}
          />
        )}
      </form>
    </div>
  )
}

export default Form
