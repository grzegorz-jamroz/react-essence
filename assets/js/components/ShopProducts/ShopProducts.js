import React from 'react';

export const ShopProducts = () => {
  return (
    <div className="shop_grid_product_area">
      <div className="row">
        <div className="col-12">
          <div className="product-topbar d-flex align-items-center justify-content-between">
            <!-- Total Products -->
            <div className="total-products">
              <p><span>186</span> products found</p>
            </div>
            <!-- Sorting -->
            <div className="product-sorting d-flex">
              <p>Sort by:</p>
              <form action="#" method="get">
                <select name="select" id="sortByselect" style="display: none;">
                  <option value="value">Highest Rated</option>
                  <option value="value">Newest</option>
                  <option value="value">Price: $$ - $</option>
                  <option value="value">Price: $ - $$</option>
                </select>
                <div className="nice-select" tabIndex="0"><span className="current">Highest Rated</span>
                  <ul className="list">
                    <li data-value="value" className="option selected">Highest Rated</li>
                    <li data-value="value" className="option">Newest</li>
                    <li data-value="value" className="option">Price: $$ - $</li>
                    <li data-value="value" className="option">Price: $ - $$</li>
                  </ul>
                </div>
                <input type="submit" className="d-none" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      </div>
    </div>
  );
};
