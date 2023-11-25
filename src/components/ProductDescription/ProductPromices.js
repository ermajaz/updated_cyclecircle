import React from 'react'
import { services } from "../../data";

function ProductPromices() {
  return (
    <div className="servicePromices-container">
            {services.map((data, index) => (
              <div className="servicePromices" key={index}>
                <img src={data.icon} alt="" />
                <div className="servicePromices-text">
                  <span className="servicePromices-heading">
                    {data.heading}
                  </span>
                  <div className="servicePromices-desc">{data.desc}</div>
                </div>
              </div>
            ))}
          </div>
  )
}

export default ProductPromices