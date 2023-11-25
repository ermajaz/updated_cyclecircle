import React, { useEffect } from 'react';
import './PriceRangeSlider.css';
import { connect } from 'react-redux';
import { setMinValue, setMaxValue } from '../../../store/slices/priceRangeSlice';
import { setPriceRange } from '../../../store/slices/listingPageFilterSlice';

const PriceRangeSlider = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  setPriceRange,
}) => {
  useEffect(() => {
    setArea();
  }, [minValue, maxValue]);

  const setArea = () => {
    const range = document.querySelector(".slider-track");
    const minTooltip = document.querySelector(".min-tooltip");
    const maxTooltip = document.querySelector(".max-tooltip");

    const rangeWidth = 500000; // Updated range width
    const minPosition = (minValue / rangeWidth) * 100;
    const maxPosition = (maxValue / rangeWidth) * 100;

    range.style.left = minPosition + "%";
    minTooltip.style.left = minPosition + "%";
    range.style.right = 100 - maxPosition + "%";
    maxTooltip.style.right = 100 - maxPosition + "%";
  };

  const setMinInput = (e) => {
    let minPrice = parseInt(e.target.value) || 0;

    // Clear existing value before updating state
    e.target.value = "";

    // Ensure that minPrice is not greater than maxValue
    if (minPrice > maxValue) {
      minPrice = maxValue;
    }

    if (minPrice < 0) {
      minPrice = 0;
    } else if (minPrice > 500000) {
      minPrice = 500000;
    }

    setMinValue(minPrice);
  };

  const setMaxInput = (e) => {
    let maxPrice = parseInt(e.target.value) || 0;

    // Clear existing value before updating state
    e.target.value = "";

    if (maxPrice < 0) {
      maxPrice = 0;
    } else if (maxPrice > 500000) {
      maxPrice = 500000;
    }

    // Ensure that maxPrice is not smaller than minValue
    if (maxPrice < minValue) {
      maxPrice = minValue;
    }

    setMaxValue(maxPrice);
  };

  const handleGoClick = () => {
    setPriceRange(`₹ ${minValue} - ₹ ${maxValue}`);
  };

  const handleMinInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setMinInput(e);
    }
  };

  const handleMaxInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setMaxInput(e);
    }
  };

  return (
    <div className="double-slider-box">
      <div className="range-slider">
        <span className="slider-track"></span>
        <input
          type="range"
          name="min_val"
          className="min-val"
          min="0"
          max="500000"  // Updated max value
          value={minValue}
          onChange={(e) => setMinInput(e)}
        />
        <input
          type="range"
          name="max_val"
          className="max-val"
          min="0"
          max="500000"  // Updated max value
          value={maxValue}
          onChange={(e) => setMaxInput(e)}
        />
        <div className="tooltip min-tooltip">₹{minValue}</div>
        <div className="tooltip max-tooltip">₹{maxValue}</div>
      </div>
      <div className="input-box">
        <div className="min-box">
          <div className="input-wrap">
            <span className="input-addon">₹</span>
            <input
              type="number"
              name="min_input"
              className="input-field min-input"
              value={minValue}
              onChange={(e) => setMinInput(e)}
              onKeyDown={handleMinInputKeyDown}
            />
          </div>
        </div>
        <div className="max-box">
          <div className="input-wrap">
            <span className="input-addon">₹</span>
            <input
              type="number"
              name="max_input"
              className="input-field max-input"
              value={maxValue}
              onChange={(e) => setMaxInput(e)}
              onKeyDown={handleMaxInputKeyDown}
            />
          </div>
        </div>
        <span className="filter-go-btn" onClick={handleGoClick}>
          GO
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  minValue: state.priceRange.minValue,
  maxValue: state.priceRange.maxValue,
});

const mapDispatchToProps = {
  setMinValue,
  setMaxValue,
  setPriceRange,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceRangeSlider);
