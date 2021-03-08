import React from "react";

import "./Pagination.css";

export default function Pagination(props) {

  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = [...Array(pageCount + 1).keys()];

  return (
    <div className="pagination">
      {pages.map(page => (
        <div href={null} key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'active' : 'page-item'}>
          {page}
        </div>
      ))}
    </div>
  )
};
