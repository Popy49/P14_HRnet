import React from "react"
import CreateEmployee from "./CreateEmployee"
import { render, screen, fireEvent } from "@testing-library/react"

// describe("Display Home page", () => {
//   test("Display Home page", () => {
//     render(<CreateEmployee />)
//     const title = screen.getByText("Create Employee")
//     expect(title.textContent).toBe("Create Employee")
//   })
// })

describe("La fonction sort", () => {
  test("Should render sorted array", () => {
    let testArray = [
      { trackingId: "2", name: "barbara" },
      { trackingId: "1", name: "zeline" },
      { trackingId: "3", name: "aline" },
    ]
    let sortedArray = [
      { trackingId: "3", name: "aline" },
      { trackingId: "2", name: "barbara" },
      { trackingId: "1", name: "zeline" },
    ]

    let testedArray = sortByKey(testArray, "name", "trackingId")
    expect(testedArray).toStrictEqual(sortedArray)
    // let inversedArray = sortByKey(testArray, "name", "name")
    // expect(testedArray).toStrictEqual(inversedArray)
  })
})
