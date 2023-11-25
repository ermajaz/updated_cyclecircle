import React, { useState, useEffect, useRef } from 'react';
import "./MaterialComponent.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMaterialsAsync, selectAllMaterials } from "../../../../features/listingPage/listingPageSlice";

function MaterialComponent({ onSelect, closeMaterialSelect,previouslySelectedMaterials }) {
  const dispatch = useDispatch();
  const materials = useSelector(selectAllMaterials);
  const [selectedMaterial, setSelectedMaterial] = useState(previouslySelectedMaterials || []);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = (material) => {
    setSelectedMaterial((prevSelectedMaterial) =>
      prevSelectedMaterial.includes(material)
        ? prevSelectedMaterial.filter((b) => b !== material)
        : [...prevSelectedMaterial, material]
    );
  };

  useEffect(() => {
    // Fetch materials when the component mounts
    dispatch(fetchAllMaterialsAsync());
  }, [dispatch]);

  const handleApplyClick = () => {
    onSelect({materials:selectedMaterial});
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Create a ref to the component
  const materialSelectRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClickOutside = (event) => {
    if (materialSelectRef.current && !materialSelectRef.current.contains(event.target)) {
      // Click occurred outside of the MaterialComponent
      closeMaterialSelect();
    }
  };

  const filteredMaterials = materials.filter((data) =>
    data.material_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={materialSelectRef} className='material-select-container'>
      <div className='material-select-btn-container'>
        <span>{selectedMaterial.length} selected</span>
        <div className='material-select-btn-contain'>
          <button className='material-select-btn-apply' onClick={handleApplyClick}>Apply</button>
          <button className='material-select-btn-clear' onClick={() => setSelectedMaterial([])}>Clear</button>
        </div>
      </div>
      <div className='material-select-search-container'>
        <input type='text' placeholder='Search...' 
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <SearchSharpIcon className='material-select-search-icon' />
      </div>
      <div className='material-select-option-container'>
        {filteredMaterials.map((data,index) => (
          <div
            className={`bikes-name-checkbox${
              selectedMaterial.includes(data.material_name) ? "-selected" : ""
            }`}
            key={index}
          >
            <input
              type='checkbox'
              checked={selectedMaterial.includes(data.material_name)}
              onChange={() => handleCheckboxChange(data.material_name)}
            />
            <span>{data.material_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialComponent;
