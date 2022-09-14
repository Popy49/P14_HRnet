import logo from "./logo.svg"
import "./App.css"
import "./styles/main.css"
import Header from "./components/Header"
import CreateEmployee from "./pages/CreateEmployee"
import EmployeeList from "./pages/EmployeeList"
import { EmployeeProvider } from "./utils/context/EmployeeProvider"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// const employeeList = {}

// const EmployeeListContext = React.createContext(employeeList)

function App() {
  return (
    <div className="App">
      <Router>
        <EmployeeProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<CreateEmployee />} />
            <Route exact path="/EmployeeList" element={<EmployeeList />} />
          </Routes>
        </EmployeeProvider>
      </Router>
    </div>
  )
}

export default App
