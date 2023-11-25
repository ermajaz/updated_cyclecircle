import React from "react";
import "./Carts_Breadcrum.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function Carts_Breadcrum() {
  return (
    <div className="breadcrum-container">
      <div className="breadcrum-items-container">
        <div className="breadcrum-carts-container">
          <div className="breadcrum-carts-icon">
            <ShoppingCartIcon style={{fontSize:"28px"}}/>
          </div>
          <hr />
        </div>
        <div className="breadcrum-address-container">
          <div className="breadcrum-address-icon">
            <LocationOnIcon style={{fontSize:"28px"}}/>
          </div>
          <hr />
        </div>
        <div className="breadcrum-payment-container">
          <div className="breadcrum-payment-icon">
            <MonetizationOnIcon style={{fontSize:"28px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts_Breadcrum;
