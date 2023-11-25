import React, { useEffect, useRef, useState } from "react";
import "./SortBy.css";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import { useDispatch } from "react-redux";
import { setSortPrice,setSortRating } from "../../../store/slices/allFilterSlice";

function SortBy({ onSelect, closeSortBySelect,previouslySortPrice,previouslySortRating }) {
  const handleSortOptionClick = (option) => {
    onSelect(option);
  };
  const dispatch = useDispatch();

  // Create a ref to the component
  const sortBySelectRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClickOutside = (event) => {
    if (
      sortBySelectRef.current &&
      !sortBySelectRef.current.contains(event.target)
    ) {
      // Click occurred outside of the BrandSelect component
      closeSortBySelect();
    }
  };

  return (
    <div ref={sortBySelectRef} className="sortby-container">
      <div
        className={`sortby-price-sorting-container ${
          !previouslySortPrice && !previouslySortRating ? "selected" : ""
        }`}
        onClick={() => {
          dispatch(setSortPrice(""));
          dispatch(setSortRating(""));
          handleSortOptionClick("relevance")}}
      >
        Relevance
      </div>
      <div
        className={`sortby-price-sorting-container ${
          previouslySortPrice ? "selected" : ""
        }`}
      >
        <span>Price</span>
        <div className="price-sorting">
          <div
            className={`a-z-price-sorting ${
              previouslySortPrice === "desc" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setSortPrice("desc"));
              dispatch(setSortRating(""));
              handleSortOptionClick("a-z-price");
            }}
          >
            <span>A Z</span>
            <NorthIcon />
          </div>
          <div
            className={`a-z-price-sorting ${
              previouslySortPrice === "asc" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setSortPrice("asc"));
              dispatch(setSortRating(""));
              handleSortOptionClick("z-a-price");
            }}
          >
            <span>Z A</span>
            <SouthIcon />
          </div>
        </div>
      </div>
      <div className={`sortby-price-sorting-container ${
          previouslySortRating ? "selected" : ""
        }`}>
        <span>Rating</span>
        <div className="price-sorting">
          <div
            className={`a-z-rating-sorting ${
              previouslySortRating === "desc" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setSortRating("desc"));
              dispatch(setSortPrice(""));
              handleSortOptionClick("a-z-rating");
            }}
          >
            <span>A Z</span>
            <NorthIcon />
          </div>
          <div
            className={`a-z-rating-sorting ${
              previouslySortRating === "asc" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setSortRating("asc"));
              dispatch(setSortPrice(""));
              handleSortOptionClick("z-a-rating");
            }}
          >
            <span>Z A</span>
            <SouthIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
