export const SORT_BY_NEWEST = 'NEWEST';
export const SORT_BY_HIGHEST_RATED = 'HIGHEST_RATED';
export const SORT_BY_PRICE_HIGH_LOW = 'PRICE_HIGH_LOW';
export const SORT_BY_PRICE_LOW_HIGH = 'PRICE_LOW_HIGH';
export const SHOP_FILTERS_SORT_BY = "SHOP_FILTERS_SORT_BY";

export const shopFiltersSortBy = sortBy => {
  return {
    type: SHOP_FILTERS_SORT_BY,
    payload: sortBy
  }
};
