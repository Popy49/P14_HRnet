import { createContext, useState, React } from "react"

export const EmployeeContext = createContext()

// export const EmployeeContext = React.createContext({
//   employee: "",
//   addEmployee: () => {},
// })

export const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([])
  const addEmployee = (newEmployee) => {
    setEmployee([...employee, newEmployee])
  }

  return (
    <EmployeeContext.Provider value={{ employee, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}
