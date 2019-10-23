import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";

export const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const SORT_BY_HIGHEST_RATED = 'SORT_BY_HIGHEST_RATED';
export const SORT_BY_PRICE_HIGH_LOW = 'SORT_BY_PRICE_HIGH_LOW';
export const SORT_BY_PRICE_LOW_HIGH = 'SORT_BY_PRICE_LOW_HIGH';

export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS";
export const FETCHING_PRODUCTS_SUCCESS = "FETCHING_PRODUCTS_SUCCESS";
export const FETCHING_PRODUCTS_ERROR = "FETCHING_PRODUCTS_ERROR";

export const SHOP_FILTERS_SORT_BY = "SHOP_FILTERS_SORT_BY";

const fetchingProducts = () => ({
  type: FETCHING_PRODUCTS,
});

const fetchingProductsSuccess = products => ({
  type: FETCHING_PRODUCTS_SUCCESS,
  payload: products,
});

const fetchingProductsError = products => ({
  type: FETCHING_PRODUCTS_ERROR,
  payload: products,
});

export const shopFiltersSortBy = sortBy => {
  return {
    type: SHOP_FILTERS_SORT_BY,
    payload: sortBy
  }
};

export const convertSortBy = sortBy => {
  switch (sortBy) {
    case SORT_BY_PRICE_HIGH_LOW:
      return { field: "unitPrice", direction: "desc" };
    case SORT_BY_PRICE_LOW_HIGH:
    default:
      return { field: "unitPrice", direction: "asc" };
  }
};

export const fetchProducts = ({ sortBy = SORT_BY_NEWEST } = {}) => {
  console.count("fetchProducts");
  sortBy = convertSortBy(sortBy);

  return async dispatch => {
    dispatch(fetchingProducts());

    try {
      let query = firestore.collection("products");
      query = query.orderBy(sortBy.field, sortBy.direction);
      const snapshot = await query.get();
      const products = snapshot.docs.map(collectIdsAndDocs);

      // dispatch(updateProductsItems(products.items ?? []));

      dispatch(fetchingProductsSuccess(products));
    } catch (e) {
      dispatch(fetchingProductsError(e));
    }
  };
};
