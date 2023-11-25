import React, { useState, useEffect } from "react";
import "./ListingHeader.css";
import { useDispatch, useSelector } from "react-redux";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SortBy from "../../SortBy/SortBy";
import BrandSelect from "./BrandSelect";
import BikesComponent from "./BikesComponent";
import MaterialComponent from "./MaterialComponent";
import { setBrands, setMaterials } from "../../../../store/slices/allFilterSlice";

function ListingHeader() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.allFilter.brands);
  const materials = useSelector((state) => state.allFilter.materials);
  const sortPrice = useSelector((state) => state.allFilter.sortPrice);
  const sortRating = useSelector((state) => state.allFilter.sortRating);
  // console.log(brands,materials);

  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (filter) => {
    setOpenFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const handleSelection = (selectedOption) => {
    setOpenFilter(null);

    if (selectedOption.brands) {
      dispatch(setBrands(selectedOption.brands));
    }

    if (selectedOption.materials) {
      dispatch(setMaterials(selectedOption.materials));
    }
  };

  return (
    <div className="listing-header-container">
      <div className="listing-header-filter-container">
        <div className="filter-div">
          <span onClick={() => toggleFilter("brands")}>Brands</span>
          {openFilter === "brands" ? (
            <KeyboardArrowDownSharpIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
          {openFilter === "brands" && (
            <BrandSelect onSelect={handleSelection} closeBrandSelect={() => setOpenFilter(null)} previouslySelectedBrands={brands}/>
          )}
        </div>

        <div className="filter-div" >
          <span onClick={() => toggleFilter("bikes")}>Bikes</span>
          {openFilter === "bikes" ? (
            <KeyboardArrowDownSharpIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
          {openFilter === "bikes" && (
            <BikesComponent onSelect={handleSelection} closeBikesSelect={() => setOpenFilter(null)} />
          )}
        </div>

        <div className="filter-div">
          <span onClick={() => toggleFilter("material")}>Material</span>
          {openFilter === "material" ? (
            <KeyboardArrowDownSharpIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
          {openFilter === "material" && (
            <MaterialComponent onSelect={handleSelection} closeMaterialSelect={() => setOpenFilter(null)} previouslySelectedMaterials={materials}/>
          )}
        </div>
      </div>
      <div className="listing-header-sortBy">
        <div className="filter-div" onClick={() => toggleFilter("sortBy")}>
          <span>Sort By</span>
          {openFilter === "sortBy" ? (
            <KeyboardArrowDownSharpIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
          {openFilter === "sortBy" && (
            <SortBy onSelect={handleSelection} closeSortBySelect={() => setOpenFilter(null)} previouslySortPrice={sortPrice} previouslySortRating={sortRating}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListingHeader;
