import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label="navigation">
      <ul className="pagination mt-50 mb-70">
        <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">21</a></li>
        <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
