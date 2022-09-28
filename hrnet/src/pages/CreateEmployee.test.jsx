import React from "react"
import CreateEmployee from "./CreateEmployee"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { EmployeeProvider } from "../utils/context/EmployeeProvider"

describe("Display Home page", () => {
  test("Display Home page", () => {
    render(
      <EmployeeProvider>
        <Router>
          <CreateEmployee />
        </Router>
      </EmployeeProvider>
    )
    expect(screen.getByRole("main")).toHaveTextContent("Create Employee")
  })
})
