import React, { useEffect, useState } from "react";
import "./SideFilterComponent.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import delivery_light from "../../../img/delivery_light_black.svg";
import bolt_black from "../../../img/bolt_black.svg";
import goldStar from "../../../img/solar-star.svg";
import blankStar from "../../../img/star.svg";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ShippingInfoMode from "./ShippingInfoMode";
import PriceRangeSlider from "./PriceRangeSlider";
import { connect } from "react-redux";
import {
  setShippingMode,
  setPriceRange,
  setRatings,
  clearAllFilters,
} from "../../../store/slices/listingPageFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setRating,
  setMinPrice,
  setMaxPrice,
} from "../../../store/slices/allFilterSlice";

function AllFilterComponent({
  shippingMode,
  priceRange,
  ratings,
  setShippingMode,
  setPriceRange,
  setRatings,
  clearAllFilters,
}) {
  const [showShippingInfo, setShowShippingInfo] = useState(false);

  const dispatch = useDispatch();
  // const rating = useSelector((state) => state.allFilter.rating);
  // const minPrice = useSelector((state) => state.allFilter.minPrice);
  // const maxPrice = useSelector((state) => state.allFilter.maxPrice);
  // useEffect(() => {
  //   console.log("Rating:", rating);
  //   console.log("Min Price:", minPrice);
  //   console.log("Max Price:", maxPrice);
  // }, [rating, minPrice, maxPrice]);

  useEffect(() => {
    if (ratings) {
      dispatch(setRating(parseFloat(ratings)));
    }
    if (priceRange) {
      const prices = priceRange
        .replace(/₹/g, "") // Remove "₹" from the string
        .split(" - ");

      // Convert the values to numbers
      const minPrice = parseInt(prices[0], 10);
      const maxPrice = parseInt(prices[1], 10);
      dispatch(setMinPrice(minPrice));
      dispatch(setMaxPrice(maxPrice));
    }
  }, [dispatch, ratings, priceRange]);

  const handleClearAll = () => {
    clearAllFilters();
    setRatings("");
    dispatch(setRating(0));
    setPriceRange("");
    dispatch(setMinPrice(0));
    dispatch(setMaxPrice(0));
  };

  const openShippingInfo = () => {
    setShowShippingInfo((prev) => !prev);
    setTimeout(() => {
      setShowShippingInfo(false);
    }, 4000);
  };

  const handleShippingModeChange = (e) => {
    setShippingMode(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatings(e.target.value);
  };

  return (
    <>
      <div
        className="info-shippingInfoMode-container"
        style={{ opacity: showShippingInfo ? 1 : 0 }}
      >
        {showShippingInfo && <ShippingInfoMode onClose={openShippingInfo} />}
      </div>
      <div className="allFilterComponent-container">
        <div className="allFilterComponent-scroll-div">
          <div className="allFilterComponent-filtered-container">
            <div className="allFilterComponent-name-div">
              <span className="allFilterComponent-heading">Filter by:</span>
              <span
                className="allFilterComponent-clearAll"
                onClick={handleClearAll}
              >
                Clear all
              </span>
            </div>
            <div className="allFilterComponent-selected-filtered-container">
              {shippingMode && (
                <span>
                  {shippingMode}{" "}
                  <CloseSharpIcon onClick={() => setShippingMode("")} />
                </span>
              )}
              {priceRange && (
                <span>
                  {priceRange}{" "}
                  <CloseSharpIcon
                    onClick={() => {
                      setPriceRange("");
                      dispatch(setMinPrice(0));
                      dispatch(setMaxPrice(0));
                    }}
                  />
                </span>
              )}
              {ratings && (
                <span>
                  {ratings} <img src={goldStar} />{" "}
                  <CloseSharpIcon
                    onClick={() => {
                      setRatings("");
                      dispatch(setRating(0));
                    }}
                  />
                </span>
              )}
            </div>
          </div>
          <div className="allFilterComponent-shipping-mode-container">
            <div className="shipping-mode-filtered-heading">
              <span>Shipping Mode</span>
              <InfoOutlinedIcon onClick={openShippingInfo} />
            </div>
            <div className="allFilterComponent-product-shipping-div">
              <div>
                <input
                  type="radio"
                  name="shippingMode"
                  value="standard"
                  checked={shippingMode === "standard"}
                  onChange={handleShippingModeChange}
                />
                <img src={delivery_light} alt="" />
                <span>Standard</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="shippingMode"
                  value="express"
                  checked={shippingMode === "express"}
                  onChange={handleShippingModeChange}
                />
                <img src={bolt_black} alt="" />
                <span>Express</span>
              </div>
            </div>
          </div>
          <div className="allFilterComponent-price-range-container">
            <span className="allFilterComponent-price-range-heading">
              Price Range
            </span>
            <div className="allFilterComponent-price-range-filter-select-container">
              <PriceRangeSlider />
            </div>
          </div>
          <div className="allFilterComponent-customer-ratings">
            <span className="allFilterComponent-customer-ratings-heading">
              Customer Rating
            </span>
            <div className="allFilterComponent-customer-ratings-div-container">
              {[4, 3, 2, 1].map((value) => (
                <div
                  key={value}
                  className="allFilterComponent-customer-ratings-div-row"
                >
                  <input
                    type="radio"
                    name="ratings"
                    value={value}
                    checked={parseInt(ratings) === value}
                    onChange={handleRatingChange}
                  />
                  <div className="input-star-div-container">
                    {[...Array(value)].map((_, index) => (
                      <img key={index} src={goldStar} alt="" />
                    ))}
                    {[...Array(5 - value)].map((_, index) => (
                      <img key={index} src={blankStar} alt="" />
                    ))}
                  </div>
                  <span> & {value}+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  shippingMode: state.listingPageFilter.shippingMode,
  priceRange: state.listingPageFilter.priceRange,
  ratings: state.listingPageFilter.ratings,
});

const mapDispatchToProps = {
  setShippingMode,
  setPriceRange,
  setRatings,
  clearAllFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFilterComponent);
