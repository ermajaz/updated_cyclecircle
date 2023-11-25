import React, { useState,useEffect, useRef } from 'react';
import "./ManufactureComponent.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { filterData } from '../../../../data';
import { useDispatch } from "react-redux";
import { fetchProductsByFiltersAsync } from "../../../../features/listingPage/listingPageSlice";

function ManufactureComponent({ onSelect,closeManufactureSelect }) {
  const [selectedManufacture, setSelectedManufacture] = useState([]);
  const [filterDatas, setFilterDatas] = useState(filterData.manufacture);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredManufacture, setFilteredManufacture] = useState(filterData.manufacture);


  const handleCheckboxChange = (manufacture) => {
    if (selectedManufacture.includes(manufacture)) {
      setSelectedManufacture(prevSelectedManufacture => prevSelectedManufacture.filter(b => b !== manufacture));
    } else {
      setSelectedManufacture(prevSelectedManufacture => [...prevSelectedManufacture, manufacture]);
    }
  };

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});

  const handleApplyClick = () => {
    let newFilter = { ...filter };
    selectedManufacture.forEach((manufacture) => {
      newFilter = { ...newFilter, ["manufacture"]: manufacture };
      setFilter(newFilter);
    });
    console.log(newFilter);
    dispatch(fetchProductsByFiltersAsync(newFilter));
  
    onSelect(selectedManufacture);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = filterDatas.filter((data) =>
      data.name.toLowerCase().includes(query)
    );

    setFilteredManufacture(filtered);
  };

  // Create a ref to the component
  const manufactureSelectRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClickOutside = (event) => {
    if (manufactureSelectRef.current && !manufactureSelectRef.current.contains(event.target)) {
      // Click occurred outside of the BrandSelect component
      closeManufactureSelect();
    }
  };

  return (
    <div ref={manufactureSelectRef} className='manufacture-select-container'>
      <div className='manufacture-select-btn-container'>
        <span>{selectedManufacture.length} selected</span>
        <div className='manufacture-select-btn-contain'>
          <button className='manufacture-select-btn-apply' onClick={handleApplyClick}>Apply</button>
          <button className='manufacture-select-btn-clear' onClick={() => setSelectedManufacture([])}>Clear</button>
        </div>
      </div>
      <div className='manufacture-select-search-container'>
        <input type='text' placeholder='Search...' 
        value={searchQuery}
        onChange={handleSearchInputChange}
/>
        <SearchSharpIcon className='manufacture-select-search-icon' />
      </div>
      <div className='manufacture-select-option-container'>
        {filteredManufacture.map((data) =>(
            <div className={`bikes-name-checkbox${
              selectedManufacture.includes(data.name) ? "-selected" : ""
            }`}
             key={data.id}>
            <input
              type='checkbox'
              checked={selectedManufacture.includes(data.name)}
              onChange={() => handleCheckboxChange(data.name)}
            />
            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManufactureComponent;
