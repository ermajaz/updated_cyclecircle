import React, { useState, useEffect, useRef } from "react";
import "./BrandSelect.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBrandsAsync, selectAllBrands } from "../../../../features/listingPage/listingPageSlice";

function BrandSelect({ onSelect, closeBrandSelect,previouslySelectedBrands  }) {
  const dispatch = useDispatch();
  const brands = useSelector(selectAllBrands);
  const [selectedBrands, setSelectedBrands] = useState(previouslySelectedBrands || []);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  useEffect(() => {
    dispatch(fetchAllBrandsAsync());
  }, [dispatch]);

  const handleApplyClick = () => {
    onSelect({ brands: selectedBrands });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Create a ref to the component
  const brandSelectRef = useRef(null);

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClickOutside = (event) => {
    if (
      brandSelectRef.current &&
      !brandSelectRef.current.contains(event.target)
    ) {
      // Click occurred outside of the BrandSelect component
      closeBrandSelect();
    }
  };

  const filteredBrands = brands.filter((data) =>
    data.manufacture_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={brandSelectRef} className="brand-select-container">
      <div className="brand-select-btn-container">
        <span>{selectedBrands.length} selected</span>
        <div className="brand-select-btn-contain">
          <button className="brand-select-btn-apply" onClick={handleApplyClick}>
            Apply
          </button>
          <button
            className="brand-select-btn-clear"
            onClick={() => setSelectedBrands([])}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="brand-select-search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <SearchSharpIcon className="brand-select-search-icon" />
      </div>
      <div className="brand-select-option-container">
        {filteredBrands.map((data, index) => (
          <div
            className={`brand-name-checkbox${
              selectedBrands.includes(data.manufacture_name) ? "-selected" : ""
            }`}
            key={index}
          >
            <input
              type="checkbox"
              checked={selectedBrands.includes(data.manufacture_name)}
              onChange={() => handleCheckboxChange(data.manufacture_name)}
            />
            <span>{data.manufacture_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSelect;
