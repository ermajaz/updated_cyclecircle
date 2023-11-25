import React, { useState,useEffect, useRef } from "react";
import "./FilterComponent.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { filterData } from "../../../data";

function FilterComponent({onSelect,closeFilterSelect}) {
  const [filterDatas, setFilterDatas] = useState(filterData.brands);
  const [selectedCategory, setSelectedCategory] = useState("brands");
  const [selectedSubCtg, setSelectedSubCtg] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSubCtg, setFilteredSubCtg] = useState(filterData.brands);

  const handleSubCtgCheckboxChange = (index) => {
    setSelectedSubCtg(prevSelectedSubCtg => {
      if (prevSelectedSubCtg.includes(index)) {
        return prevSelectedSubCtg.filter(item => item !== index);
      } else {
        return [...prevSelectedSubCtg, index];
      }
    });
  };

  const handleSubCtgApplyClick = () => {
    onSelect(selectedSubCtg);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = filterDatas.filter((data) =>
      data.name.toLowerCase().includes(query)
    );

    setFilteredSubCtg(filtered);
  };

  const selectCategories = (ctg) => {
    setSelectedCategory(ctg);
    switch (ctg) {
      case "brands":
        setFilterDatas(filterData.brands);
        setFilteredSubCtg(filterData.brands);
        break;
      case "bikes":
        setFilterDatas(filterData.bikes);
        setFilteredSubCtg(filterData.bikes);
        break;
      case "manufacture":
        setFilterDatas(filterData.manufacture);
        setFilteredSubCtg(filterData.manufacture);
        break;
      case "material":
        setFilterDatas(filterData.material);
        setFilteredSubCtg(filterData.material);
        break;
      default:
        setFilterDatas(filterData.sortBy);
        setFilteredSubCtg(filterData.sortBy);
        break;
    }
    setSelectedSubCtg([]);
    // setFilteredSubCtg([]); // Reset filtered sub-categories
    setSearchQuery(""); // Reset search input
  };

  // Create a ref to the component
  const filterSelectRef = useRef(null);

  // useEffect(() => {
  //   // Add event listener when component mounts
  //   document.addEventListener("click", handleClickOutside);

  //   // Remove event listener when component unmounts
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once

  // const handleClickOutside = (event) => {
  //   if (filterSelectRef.current && !filterSelectRef.current.contains(event.target)) {
  //     // Click occurred outside of the BrandSelect component
  //     closeFilterSelect();
  //   }
  // };


  return (
    <div ref={filterSelectRef} className="filter-component-container">
      <div className="filter-name-container">
        <span>Filters</span>
        <CloseSharpIcon className="filter-cross-icon" onClick={handleSubCtgApplyClick}/>
      </div>
      <div className="filter-main-container">
        <div className="filter-categories-container">
          <span
            onClick={() => selectCategories("brands")}
            className={selectedCategory === "brands" ? "selected" : ""}
          >
            Brands
          </span>
          <span
            onClick={() => selectCategories("bikes")}
            className={selectedCategory === "bikes" ? "selected" : ""}
          >
            Bikes
          </span>
          <span
            onClick={() => selectCategories("manufacture")}
            className={selectedCategory === "manufacture" ? "selected" : ""}
          >
            Manufacture
          </span>
          <span
            onClick={() => selectCategories("material")}
            className={selectedCategory === "material" ? "selected" : ""}
          >
            Material
          </span>
          <span
            onClick={() => selectCategories("sortby")}
            className={selectedCategory === "sortby" ? "selected" : ""}
          >
            Sort By
          </span>
        </div>
        <div className="filter-search-sub-categories-container">
          <div className="filter-search-container">
            <input type="text" placeholder="Search Here..." 
            value={searchQuery}
            onChange={handleSearchInputChange}
            />
            <SearchSharpIcon className="filter-search-icon" />
          </div>
          <div
            className="filter-subcategories-container"
            style={filteredSubCtg.length < 7 ? { flexDirection: "column" } : null}
          >
           {filteredSubCtg.map((data) => (
          <div
            className="filter-subcategories-item"
            key={data.id}
            style={filteredSubCtg.length < 7 ? { width: "100%" } : null}
          >
            <input
              type="checkbox"
              checked={selectedSubCtg.includes(data.name)}
              onChange={() => handleSubCtgCheckboxChange(data.name)}
            />
            <span>{data.name}</span>
          </div>
        ))}
          </div>
        </div>
      </div>
      <div className="filter-btn-container">
        <button className="filter-btn-clearall" onClick={() => setSelectedSubCtg([])}>Clear All</button>
        <button className="filter-btn-apply" onClick={handleSubCtgApplyClick}>Apply</button>
      </div>
    </div>
  );
}

export default FilterComponent;
