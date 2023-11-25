import React,{useEffect,useRef} from "react";
import "./ShippingInfoMode.css";
import deliveryLight from "../../../img/delivery_light_purple.svg";
import bolt from "../../../img/bolt_purple.svg";

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
    <div ref={infoRef} className="infoFilter-detail-main-container">
      <div className="infoFilter-detail-container">
        <div className="standard-shipping-infoFilter-container">
          <span className="infoFilter-standard-name">
            <img src={deliveryLight} alt="" />
            Standard Shipping
          </span>
          <span className="infoFilter-standard-heading">Fast & Economical</span>
          <p>Free delivery on order value aboce Rs. 3000</p>
        </div>
        <div className="express-shipping-infoFilter-container">
          <span className="infoFilter-express-name">
            <img src={bolt} alt="" />
            Express Shipping
          </span>
          <span className="infoFilter-express-heading">Need for speed?</span>
          <p>Get 2 day delivery with Express Shipping</p>
        </div>
      </div>
      <div className="infoFilter-shipping-detail-arrow"></div>
    </div>
  );
}

export default ShippingInfo;
