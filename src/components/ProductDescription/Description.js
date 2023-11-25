import React from "react";
import "./Description.css";
import { product_description } from "../../data";

function Description() {
  return (
    <div className="description_containers">
      <h3 className="description_heading">
        {product_description.descriptions.productHeading}
      </h3>
      <div className="description_details">
        <p className="description_para">
          {product_description.descriptions.productDescs}
        </p>
        <div className="description_points">
          <h4 className="description_features_heading">
            {product_description.descriptions.productFeatures}
          </h4>
          <ul>
            {product_description.descriptions.productLis.map((lis, index) => (
              <li>{lis.para}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
