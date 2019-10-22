import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import variables from "../../Core/Bootstrap/VariablesExport.scss";
import "./PriceFilter.scss";

const marks = [
  { value: 0 },
  { value: 50 },
  { value: 100 },
  { value: 150 },
  { value: 200 }
];

const PriceSlider = withStyles({
  root: {
    color: variables.salmon
  },
  thumb: {
    backgroundColor: variables.salmon,
  },
  active: {},
  valueLabel: {
    top: -22,
    '& *': {
      background: 'transparent',
      color: variables.gray900,
    },
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  }
})(Slider);

const PriceFilter = () => {
  const [value, setValue] = useState([35, 175]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="priceFilter">
      <p className="priceFilter__title">Price</p>
      <PriceSlider
        className="priceSlider"
        value={value}
        onChange={handleChange}
        marks={marks}
        valueLabelDisplay="on"
        max={200}
      />
    </div>
  );
};

export default PriceFilter;
