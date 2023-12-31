"use client"

import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination flex justify-between my-5">
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
