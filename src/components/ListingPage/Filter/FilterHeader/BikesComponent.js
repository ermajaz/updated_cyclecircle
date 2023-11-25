import React, { useState,useEffect, useRef } from "react";
import "./BikesComponent.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { filterData } from "../../../../data";
import { useDispatch } from "react-redux";

function BikesComponent({ onSelect,closeBikesSelect }) {
  const [selectedBikes, setSelectedBikes] = useState([]);
  const [filterDatas, setFilterDatas] = useState(filterData.bikes);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBikes, setFilteredBikes] = useState(filterData.bikes);

  const handleCheckboxChange = (bike) => {
    if (selectedBikes.includes(bike)) {
      setSelectedBikes((prevSelectedBikes) =>
        prevSelectedBikes.filter((b) => b !== bike)
      );
    } else {
      setSelectedBikes((prevSelectedBikes) => [...prevSelectedBikes, bike]);
    }
  };

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});

  const handleApplyClick = () => {
    let newFilter = { ...filter };
    selectedBikes.forEach((bike) => {
      newFilter = { ...newFilter, ["bikes"]: bike };
      setFilter(newFilter);
    });
    console.log(newFilter);
  
    onSelect(selectedBikes);
  };


  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = filterDatas.filter((data) =>
      data.name.toLowerCase().includes(query)
    );

    setFilteredBikes(filtered);
  };

  // Create a ref to the component
  const bikesSelectRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClickOutside = (event) => {
    if (bikesSelectRef.current && !bikesSelectRef.current.contains(event.target)) {
      // Click occurred outside of the BrandSelect component
      closeBikesSelect();
    }
  };

  return (
    <div ref={bikesSelectRef} className="bikes-select-container">
      <div className="bikes-select-btn-container">
        <span>{selectedBikes.length} selected</span>
        <div className="bikes-select-btn-contain">
          <button className="bikes-select-btn-apply" onClick={handleApplyClick}>
            Apply
          </button>
          <button
            className="bikes-select-btn-clear"
            onClick={() => setSelectedBikes([])}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="bikes-select-search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <SearchSharpIcon className="bikes-select-search-icon" />
      </div>
      <div className="bikes-select-option-container">
        {filteredBikes.map((data) => (
          <div
            className={`bikes-name-checkbox${
              selectedBikes.includes(data.name) ? "-selected" : ""
            }`}
            key={data.id}
          >
            <input
              type="checkbox"
              checked={selectedBikes.includes(data.name)}
              onChange={() => handleCheckboxChange(data.name)}
            />
            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikesComponent;
