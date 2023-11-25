import React from 'react';
import "./Clothing.css";
import { Link } from 'react-router-dom';

const Clothing = ({ categories, onClose }) => {
  return (
    <div className="clothContainer">
      {categories.map((data) => (
        <Link to={`/listing-page/${data.CategoryID}/${data.categoryName}`} key={data.CategoryID} onClick={onClose}>
          <div className="clothcardContainer">
            <div className="clothcard">
              <img
                src={`https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_CATEGORY_IMAGE/${data.image}`}
                alt=""
              />
            </div>
            <div className="clothname">{data.categoryName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Clothing;
