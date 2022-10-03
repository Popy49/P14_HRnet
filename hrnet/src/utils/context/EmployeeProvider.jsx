import { createContext, useState, React } from "react"
import mockedDatas from "../mockedDatas.json"

/**
 * Context for employee list
 *
 * @return void
 * @author JP
 * @version 1.0
 */

export const EmployeeContext = createContext()

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployee] = useState(mockedDatas)
  const addEmployee = (newEmployee) => {
    setEmployee([...employees, newEmployee])
  }

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}
