import React from 'react';
import './Pagination.scss';

const Pagination = () => {
  return (
    <nav className="pagination">
      <ul className="pagination__ul">
        <li className="pagination__li"><a className="pagination__link" href="#"><i className="fa fa-angle-left" /></a>
        </li>
        <li className="pagination__li"><a className="pagination__link" href="#">1</a></li>
        <li className="pagination__li"><a className="pagination__link" href="#">2</a></li>
        <li className="pagination__li"><a className="pagination__link" href="#">3</a></li>
        <li className="pagination__li"><a className="pagination__link" href="#">...</a></li>
        <li className="pagination__li"><a className="pagination__link" href="#">21</a></li>
        <li className="pagination__li"><a className="pagination__link" href="#"><i className="fa fa-angle-right" /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
