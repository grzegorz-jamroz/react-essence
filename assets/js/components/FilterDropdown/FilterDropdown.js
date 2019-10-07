import React, { useState } from 'react';
import Select from "react-select";
import './FilterDropdown.scss';

const FilterDropdown = () => {
  const options = [
    { value: 'highest_rated', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
    { value: 'price_hight_low', label: 'Price: $$ - $' },
    { value: 'price_low_hight', label: 'Price: $ - $$' }
  ];

  const [filterValue, setFilterValue] = useState({ value: 'newest', label: 'Newest' })

  const customStyles = {
    control: (styles) => ({...styles, border: 'none', boxShadow: 'none'}),
    input: () => ({display: 'none'}),
    singleValue: (styles) => ({
      ...styles,
      top: 'auto',
      transform: 'none',
      position: 'relative',
      maxWidth: 'calc(100% - 0.25rem)'
    })
  };

  return (
    <div className="filterDropdown">
      <p className="filterDropdown__p">Sort by:</p>
      <Select
        value={filterValue}
        onChange={value => setFilterValue(value)}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default FilterDropdown;
