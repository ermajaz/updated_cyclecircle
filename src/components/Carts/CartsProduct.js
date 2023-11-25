import React, { useState } from "react";
import "./CartsProduct.css";
import PriceDetail from "./PriceDetail";
import DeliveryEstimates from "./DeliveryEstimates";
import CartsAllProduct from "./CartsAllProduct";
import ContactDetail from "./ContactDetail";
import DefaultContact from "./DefaultContact";
import PaymentMode from "./PaymentMode";

function CartsProduct() {
  const [showDeliveryEstimates, setShowDeliveryEstimates] = useState(false);
  const [showContactDetail, setShowContactDetail] = useState(false);
  const [showDefaultContact, setShowDefaultContact] = useState(true);

  const handleCheckout = () => {
    setShowDeliveryEstimates(true);
    setShowContactDetail(false);
    setShowDefaultContact(false);
  };

  const handleAddNewAddress = () => {
    setShowContactDetail(true);
    setShowDefaultContact(false);
  };
  return (
    <>
      <div className="cartsProduct-container">
        <div className="carts-container">
        {showDefaultContact && <CartsAllProduct />}
          {showContactDetail && <ContactDetail />}
          {!showDefaultContact && <DefaultContact onAddNewAddress={handleAddNewAddress}/>}
          {/* <PaymentMode/> */}
        </div>
        <div className="cartsProduct-estimates-container">
        {showDeliveryEstimates && <DeliveryEstimates />}
          <div className="cartsProduct-checkout-container">
          <PriceDetail onCheckout={handleCheckout} />
          </div>
        </div>
      </div>
    </>
  );
}


export default CartsProduct;
