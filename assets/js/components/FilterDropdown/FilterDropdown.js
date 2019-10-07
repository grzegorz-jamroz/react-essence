import React from 'react';
import Select from "react-select";
import './FilterDropdown.scss';

const FilterDropdown = () => {
  const options = [
    { value: '1', label: 'Highest Rated' },
    { value: '2', label: 'Newest' },
    { value: '3', label: 'Price: $$ - $' },
    { value: '4', label: 'Price: $ - $$' }
  ];

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
        value={options.filter(option => option.label === 'Highest Rated')}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default FilterDropdown;
