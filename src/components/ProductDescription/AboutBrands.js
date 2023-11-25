import React from 'react'
import "./AboutBrands.css";
import { product_description } from '../../data';

function AboutBrands() {
  return (
    <div className="about_containers">
      <h3 className='container-Name'>About Brand</h3>
      <h3 className="about_heading">
        {product_description.aboutBrands.productName}
      </h3>
      <div className="about_details">
        <p className="about_para">
          {product_description.aboutBrands.productDesc}
        </p>
        <div className="about_points">
          <h4 className="about_features_heading">
            {product_description.aboutBrands.productFeature}
          </h4>
          <ul>
            {product_description.aboutBrands.productLi.map((lis, index) => (
              <li>{lis.para}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutBrands