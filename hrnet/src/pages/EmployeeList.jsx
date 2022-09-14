import PropTypes from "prop-types"
import arrowIcon from "../assets/triangle-svgrepo-com.svg"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
// import Modal from "../utils/Modal"
// import { Modal } from "modal-react-library"

/**
 * Display Employees List page
 *
 * @return void
 * @author JP
 * @version 1.0
 */

import { useContext } from "react"
import { useState } from "react"
import { EmployeeContext } from "../utils/context/EmployeeProvider"

function sortByKey(array, key, order) {
  return array.sort(function (a, b) {
    var x = a[key]
    var y = b[key]
    if (typeof x == "string") {
      x = ("" + x).toLowerCase()
    }
    if (typeof y == "string") {
      y = ("" + y).toLowerCase()
    }
    if (order === key) {
      return x < y ? 1 : x > y ? -1 : 0
    } else {
      return x < y ? -1 : x > y ? 1 : 0
    }
  })
}

function EmployeeList() {
  // const { employee, addEmployee } = useContext(EmployeeContext)
  const employees = JSON.parse(localStorage.getItem("employees"))
  const [employeesSort, setEmployeesSort] = useState(employees)

  const [pageIndex, setPageIndex] = useState(10)
  const [pages, setPages] = useState(10)
  const [order, setOrder] = useState("")

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
    // arrow.classList.add("purple")
    // key === order ? setOrder("") : setOrder(key)

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
    //ajouter sens inverse
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
      <div>
        <select onChange={handleSelect}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>

      <div>
        {/* <Modal
          buttonType="submit"
          buttonText="cliquer"
          htmlTextModal="bonjour"
        /> */}
        <label for="search">
          Search :
          <input
            type="search"
            id="search"
            name="search"
            onChange={handleChange}
          />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <div className="flexRow">
                First Name{" "}
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
              <div className="flexRow">
                Last Name{" "}
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
              <div className="flexRow">
                Start Date
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
              <div className="flexRow">
                Department
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
              <div className="flexRow">
                Date of Birth
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
              <div className="flexRow">
                Street
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
              <div className="flexRow">
                City
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
              <div className="flexRow">
                State
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
              <div className="flexRow">
                Zip Code
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
              <tr>
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
      <span>
        Showing {pages - pageIndex + 1} to{" "}
        {pages < employeesSort.length ? pages : employeesSort.length} of{" "}
        {employeesSort.length ? employeesSort.length : ""} entries
      </span>
      <button value="previous" onClick={handlePagination}>
        Previous
      </button>
      {[...Array(Math.ceil(employeesSort.length / pageIndex))].map((e, i) => (
        <span className="busterCards" key={i}>
          <button value={i + 1} onClick={handlePagination}>
            {i + 1}
          </button>
        </span>
      ))}
      <button value="next" onClick={handlePagination}>
        Next
      </button>
    </main>
  )
}

export default EmployeeList
