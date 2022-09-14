import { useState } from "react"
import React from "react"
import ReactDOM from "react-dom"

// export interface ModalProps {
//     buttonType: "button" | "submit" | "reset" | undefined;
//     buttonText: string;
//     htmlTextModal: string;
//   }

function Modal(props) {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen(!isOpen)
  }

  if (!isOpen) {
    return (
      <button type={props.buttonType} onClick={handleClick}>
        {props.buttonText}
      </button>
    )
  }
  return ReactDOM.createPortal(
    <>
      <div className="backModal">
        <div className="modal">
          {props.htmlTextModal}
          <button
            className="modal--button"
            onKeyDown={handleClick}
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}

export default Modal
