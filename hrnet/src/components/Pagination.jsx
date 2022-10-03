import React from "react"
import { usePagination, DOTS } from "../utils/pagination/usePagination"

/**
 * Display Pagination
 *
 * @params object with pages datas
 * @return void
 * @author JP
 * @version 1.0
 */

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div>
      {/* Left navigation arrow */}
      <button className="paginationButton" value="next" onClick={onPrevious}>
        Previous
      </button>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <span>&#8230;</span>
        }

        // Render our current Page
        if (pageNumber === currentPage) {
          return (
            <button
              id={pageNumber}
              className="paginationButton paginationButton--active"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        }

        // Render our Page Pills
        return (
          <button
            id={pageNumber}
            className="paginationButton"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}
      {/*  Right Navigation arrow */}
      <button className="paginationButton" value="next" onClick={onNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination
