import { createContext, useState, React } from "react"
import mockedDatas from "../mockedDatas.json"

export const EmployeeContext = createContext()

// export const EmployeeContext = React.createContext({
//   employee: "",
//   addEmployee: () => {},
// })

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
