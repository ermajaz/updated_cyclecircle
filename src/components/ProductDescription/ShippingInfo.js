import React, { useRef, useEffect } from "react";
import "./ShippingInfo.css";
import deliveryLight from "../../img/delivery_light_purple.svg";
import bolt from "../../img/bolt_purple.svg";

function ShippingInfo({onClose}) {
  const infoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        // Clicked outside the component, you can close it here
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={infoRef} className="info-detail-main-container">
      <div className="info-detail-container">
        <div className="standard-shipping-info-container">
          <img src={deliveryLight} alt="" />
          <div className="standard-text-desc">
            <span className="standard-name">Standard Shipping</span>
            <span className="standard-heading">Fast & Economical</span>
            <p>Free delivery on order value aboce Rs. 3000</p>
          </div>
        </div>
        <div className="express-shipping-info-container">
          <img src={bolt} alt="" />
          <div className="express-text-desc">
          <span className="express-name">Express Shipping</span>
          <span className="express-heading">Need for speed?</span>
          <p>Get 2 day delivery with Express Shipping</p>
          </div>
        </div>
      </div>
      <div className="shipping-detail-arrow"></div>
    </div>
  );
}

export default ShippingInfo;
