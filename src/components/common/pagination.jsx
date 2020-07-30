import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const pageNumber = props.totalMovies / props.pageSize;
  const pages = _.range(1, pageNumber + 1);
  if (Math.ceil(pageNumber) === 1) return null;
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={
            page === props.currentPage ? "page-item active" : "page-item"
          }
        >
          <a
            className="page-link"
            href="#"
            onClick={() => props.paginate(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
