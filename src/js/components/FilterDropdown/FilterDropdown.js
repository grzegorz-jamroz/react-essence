import React, { useState } from "react";
import Select from "react-select";
import "./FilterDropdown.scss";
import {
  shopFiltersSortBy,
  SORT_BY_NEWEST,
  SORT_BY_HIGHEST_RATED,
  SORT_BY_PRICE_HIGH_LOW,
  SORT_BY_PRICE_LOW_HIGH, fetchProducts,
} from "../../actions/shopFiltersActions";
import { connect } from "react-redux";

const FilterDropdown = ({ sortBy, changeSortBy }) => {
  const options = [
    { value: SORT_BY_NEWEST, label: "Newest" },
    { value: SORT_BY_HIGHEST_RATED, label: "Highest Rated" },
    { value: SORT_BY_PRICE_HIGH_LOW, label: "Price: $$ - $" },
    { value: SORT_BY_PRICE_LOW_HIGH, label: "Price: $ - $$" }
  ];

  const [selectedOption, setSelectedOption] = useState(options.filter(option => option.value === sortBy)[0]);

  const onChangeHandle = option => {
    changeSortBy(option.value);
    setSelectedOption(option);
  };

  return (
    <div className="filterDropdown">
      <p className="filterDropdown__p">Sort by:</p>
      <Select
        onChange={onChangeHandle}
        options={options}
        className="filterDropdown__container"
        classNamePrefix="filterDropdown"
        isSearchable={false}
        value={selectedOption}
      />
    </div>
  );
};

const mapStateToProps = ({ shopFiltersReducer: { sortBy } }) => {
  return { sortBy };
};

const mapDispatchToProps = dispatch => ({
  changeSortBy: sortBy => {
    dispatch(shopFiltersSortBy(sortBy));
    dispatch(fetchProducts({sortBy}));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDropdown);
