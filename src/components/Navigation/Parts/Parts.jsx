import React, { useEffect } from 'react';
import "./Parts.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Parts = ({ categories, onClose }) => {
  const [category, setCategory] = useState([]);
  console.log(categories);
  return (
    <div className="partsContainer">
      {categories.map((data) => (
        <Link to={`/listing-page/${data.CategoryID}/${data.categoryName}`} key={data.CategoryID}>
          <div className="cardContainer" onClick={onClose}>
            <div className="card">
              <img src={`https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_CATEGORY_IMAGE/${data.image}`} alt="" />
            </div>
            <div className="name">{data.categoryName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Parts;
