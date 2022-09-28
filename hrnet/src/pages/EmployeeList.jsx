import PropTypes from "prop-types"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import sortByKey from "../utils/sort"
import { useContext, useState } from "react"
import fields from "../utils/fields"
import { EmployeeContext } from "../utils/context/EmployeeProvider"
import Pagination from "../components/Pagination"

/**
 * Display Employees List page
 *
 * @return void
 * @author JP
 * @version 1.0
 */

function EmployeeList() {
  // const employees = JSON.parse(localStorage.getItem("employees"))
  const { employees } = useContext(EmployeeContext)

  const [employeesSort, setEmployeesSort] = useState(employees)
  const [pageIndex, setPageIndex] = useState(10)
  const [pages, setPages] = useState(10)
  const [order, setOrder] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const numberOfEmployees = employeesSort === null ? 0 : employeesSort.length

  // STYLES Functions
  function arrowStyle(key) {
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
      ascendingArrow.classList.add("white")
      descendingArrow.classList.add("purple")
      ascendingArrow.classList.remove("purple")
      descendingArrow.classList.remove("white")
    } else {
      ascendingArrow.classList.add("purple")
      descendingArrow.classList.add("white")
      ascendingArrow.classList.remove("white")
      descendingArrow.classList.remove("purple")
    }
  }

  //Events functions
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
    arrowStyle(key)

    if (key === order) {
      setOrder("")
    } else {
      setOrder(key)
    }
    const newEmployeesList = sortByKey(employees, key, order)
    setEmployeesSort([...newEmployeesList])
  }

  const handleSelect = (e) => {
    setPageIndex(parseInt(e.target.value))
    setPages(parseInt(e.target.value))
  }

  const handlePagination = (e) => {
    setCurrentPage(e)
    const maxRowInArray =
      pageIndex * Math.ceil(employeesSort.length / pageIndex) + 1
    if (pageIndex * e > 0 && pageIndex * e < maxRowInArray) {
      setPages(pageIndex * e)
    }
    if (e === "next") {
      if (pages < employeesSort.length) {
        setPages(pages + pageIndex)
      }
    }
    if (e === "previous") {
      if (pages - pageIndex > 0) {
        setPages(pages - pageIndex)
      }
    }
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

        <div className="verticalAlign">
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
            {fields.map((field) => (
              <th key={field.name}>
                <div className="flexRow arrayHeader">
                  <div className="verticalAlign">{field.name}</div>
                  <button
                    className="flexColumn "
                    value={field.value}
                    id={field.value}
                    onClick={handleClick}
                  >
                    <VscTriangleUp className="arrow grey" />
                    <VscTriangleDown className="arrow grey" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeesSort ? (
            employeesSort
              .slice(pages - pageIndex, pages)
              .map((employee, index) => (
                <tr className="cell" key={index}>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.birthdate}</td>
                  <td>{employee.startdate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
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
          <Pagination
            onPageChange={handlePagination}
            currentPage={currentPage}
            totalCount={numberOfEmployees}
            siblingCount={1}
            pageSize={pageIndex}
          />
        </div>
      </div>
    </main>
  )
}

export default EmployeeList
