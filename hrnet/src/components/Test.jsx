import { useState } from "react"
import React from "react"
import ReactDOM from "react-dom"
import "./test.css"
import PropTypes from "prop-types"

Test.propTypes = {
  buttonType: "button" | "submit" | "reset" | undefined,
  buttonText: PropTypes.string,
  htmlTextModal: PropTypes.string,
  modalIsActive: PropTypes.bool,
}

function Test(props) {
  const {
    buttonType,
    buttonText,
    htmlTextModal,
    modalIsActive,
    handleActiveModal,
  } = props

  const handleClick = () => {
    handleActiveModal(!modalIsActive)
  }

  if (!modalIsActive) {
    return (
      <button type={buttonType} onClick={handleClick}>
        {buttonText}
      </button>
    )
  }
  return ReactDOM.createPortal(
    <>
      <div className="backModal">
        <div className="modal">
          {htmlTextModal}
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

export default Test
