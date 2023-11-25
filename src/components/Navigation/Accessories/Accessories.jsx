import React from "react";
import "./Accessories.css";
import { Link } from "react-router-dom";

const Accessories = ({ categories, onClose }) => {

  const cycleAccessories = categories.filter(
    (category) => category.type === "cycle"
  );
  const cyclistAccessories = categories.filter(
    (category) => category.type === "cycleList"
  );
  return (
    <>
      <div className="container">
        <div className="cContainer">
          <h2>For the Cycle</h2>
          <div className="containerItems">
            {cycleAccessories.map((data) => (
              <Link to={`/listing-page/${data.CategoryID}/${data.categoryName}`} key={data.CategoryID} onClick={onClose}>
                <div className="cCardContainer">
                  <div className="cCard">
                    <img
                      src={`https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_CATEGORY_IMAGE/${data.image}`}
                      alt=""
                    />
                  </div>
                  <div className="cName">{data.categoryName}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="cContainer">
          <h2>For the Cyclist</h2>
          <div className="containerItems">
            {cyclistAccessories.map((data) => (
              <Link to={`/listing-page/${data.CategoryID}/${data.categoryName}`} key={data.CategoryID} onClick={onClose}>
                <div className="cCardContainer">
                  <div className="cCard">
                    <img
                      src={`https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_CATEGORY_IMAGE/${data.image}`}
                      alt=""
                    />
                  </div>
                  <div className="cName">{data.categoryName}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
