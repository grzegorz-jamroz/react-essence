import React from 'react';
import Select from 'react-select';
import './ShopTopBar.scss';

const ShopTopBar = () => {
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
    <div className="shopTopBar">
      <div className="shopTopBar__found">
        <span className="shopTopBar__foundNumber">186</span> products found
      </div>
      <div className="shopTopBar__filter">
        <p className="shopTopBar__p">Sort by:</p>
        <Select
          value={options.filter(option => option.label === 'Highest Rated')}
          className="shopTopBarFilter"
          classNamePrefix="shopTopBarFilter"
          options={options}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default ShopTopBar;
