import { useState } from "react"
import React from "react"
import ReactDOM from "react-dom"
import "./test.css"
// import "./Modal.css"

function Test(props) {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    const modal = document.getElementById("backModal")
    console.log(modal)
    setisOpen(!isOpen)
    if (!isOpen) {
      const modal = document.getElementById("backModal")
      modal.classList.add("visible")
      modal.classList.remove("invisible")
    } else {
      const modal = document.getElementById("backModal")
      modal.classList.remove("visible")
      modal.classList.add("invisible")
    }
  }

  return (
    <div>
      <button type={props.buttonType} onClick={handleClick}>
        {props.buttonText}
      </button>
      <div id="backModal" className=" invisible backModal">
        <div className="modal">
          <p className="modal--text">{props.htmlTextModal}</p>
          <button
            className="modal--button"
            onKeyDown={handleClick}
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Test
