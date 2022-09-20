import PropTypes from "prop-types"
import arrowIcon from "../assets/triangle-svgrepo-com.svg"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import HeaderArray from "../components/HeaderArray"
import sortByKey from "../utils/sort"
import { Modal } from "modal-react-library"
import { useContext } from "react"
import { useState } from "react"
import { EmployeeContext } from "../utils/context/EmployeeProvider"

/**
 * Display Employees List page
 *
 * @return void
 * @author JP
 * @version 1.0
 */

function EmployeeList() {
  // const { employee, addEmployee } = useContext(EmployeeContext)
  const employees = JSON.parse(localStorage.getItem("employees"))
  const [employeesSort, setEmployeesSort] = useState(employees)
  const [pageIndex, setPageIndex] = useState(10)
  const [pages, setPages] = useState(10)
  const [order, setOrder] = useState("")
  const numberOfEmployees = employeesSort === null ? 0 : employeesSort.length

  const handleChange = (e) => {
    const search = e.target.value
    const employeesFiltered = employees.filter((employee) =>
      Object.values(employee).some((item) =>
        item.toLowerCase().includes(search)
      )
    )
    setEmployeesSort(employeesFiltered)
  }

  const handleClick = (e) => {
    const key = e.target.closest("button").value
    const allArrows = document.querySelectorAll(".arrow")
    allArrows.forEach((arrow) => {
      arrow.classList.remove("purple")
      arrow.classList.remove("white")
      arrow.classList.add("grey")
    })
    const arrows = document.getElementById(key)
    const ascendingArrow = arrows.children[0]
    const descendingArrow = arrows.children[1]

    if (key === order) {
      setOrder("")
      ascendingArrow.classList.add("white")
      descendingArrow.classList.add("purple")
      ascendingArrow.classList.remove("purple")
      descendingArrow.classList.remove("white")
    } else {
      ascendingArrow.classList.add("purple")
      descendingArrow.classList.add("white")
      ascendingArrow.classList.remove("white")
      descendingArrow.classList.remove("purple")
      setOrder(key)
    }

    const newEmployeesList = sortByKey(employees, key, order)
    setEmployeesSort([...newEmployeesList])
  }

  const handlePagination = (e) => {
    const maxRowInArray =
      pageIndex * Math.ceil(employeesSort.length / pageIndex) + 1
    if (
      pageIndex * e.target.value > 0 &&
      pageIndex * e.target.value < maxRowInArray
    ) {
      setPages(pageIndex * e.target.value)
    }
    if (e.target.value === "next") {
      if (pages < employeesSort.length) {
        setPages(pages + pageIndex)
      }
    }
    if (e.target.value === "previous") {
      if (pages - pageIndex > 0) {
        setPages(pages - pageIndex)
      }
    }
  }

  const handleSelect = (e) => {
    setPageIndex(parseInt(e.target.value))
    setPages(parseInt(e.target.value))
  }

  return (
    <main>
      <h2>Current Employees</h2>
      <div className="flexRowSpace">
        <div>
          <span>Showing </span>
          <select onChange={handleSelect}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span> entries</span>
        </div>

        <div>
          <label htmlFor="search">
            Search :{" "}
            <input
              type="search"
              id="search"
              name="search"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">First Name </div>

                <button
                  className="flexColumn "
                  value="firstname"
                  id="firstname"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">Last Name </div>
                <button
                  className="flexColumn"
                  value="lastname"
                  id="lastname"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">Start Date</div>
                <button
                  className="flexColumn"
                  value="startdate"
                  id="startdate"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">Department</div>
                <button
                  className="flexColumn"
                  value="department"
                  id="department"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">Date of Birth</div>
                <button
                  className="flexColumn"
                  value="birthdate"
                  id="birthdate"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">Street</div>
                <button
                  className="flexColumn"
                  value="street"
                  id="street"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">City</div>
                <button
                  className="flexColumn"
                  value="city"
                  id="city"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">State</div>
                <button
                  className="flexColumn"
                  value="state"
                  id="state"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
            <th>
              <div className="flexRow arrayHeader">
                <div className="verticalAlign">Zip Code</div>
                <button
                  className="flexColumn"
                  value="zipCode"
                  id="zipCode"
                  onClick={handleClick}
                >
                  <VscTriangleUp className="arrow grey" />
                  <VscTriangleDown className="arrow grey" />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {employeesSort ? (
            employeesSort.slice(pages - pageIndex, pages).map((employee) => (
              <tr className="cell">
                <th>{employee.firstname}</th>
                <th>{employee.lastname}</th>
                <th>{employee.startdate}</th>
                <th>{employee.department}</th>
                <th>{employee.birthdate}</th>
                <th>{employee.street}</th>
                <th>{employee.city}</th>
                <th>{employee.state}</th>
                <th>{employee.zipCode}</th>
              </tr>
            ))
          ) : (
            <tr>
              <th>No data available in table</th>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flexRowSpace">
        <span>
          Showing {pages - pageIndex + 1} to{" "}
          {pages < numberOfEmployees ? pages : numberOfEmployees} of{" "}
          {numberOfEmployees} entries
        </span>
        <div>
          <button value="previous" onClick={handlePagination}>
            Previous
          </button>
          {[...Array(Math.ceil(numberOfEmployees / pageIndex))].map((e, i) => (
            <span className="busterCards" key={i}>
              <button value={i + 1} onClick={handlePagination}>
                {i + 1}
              </button>
            </span>
          ))}
          <button value="next" onClick={handlePagination}>
            Next
          </button>
        </div>
      </div>
    </main>
  )
}

export default EmployeeList
