import React from "react";
import "./DefaultContact.css";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function DefaultContact({onAddNewAddress}) {
  return (
    <div className="default-contact-container">
      <div className="default-contact-selectAddress">
        <p>Select Delivery Address</p>
        <button>Add new address</button>
      </div>
      <div className="default-contact-address-container">
        <span className="default-contact-address-span">Default Address</span>
        <div className="default-contact-address-1">
          <div className="default-contact-box">
            <div className="default-contact-circle-check">
              <div className="default-contact-overlap-group">
                <div className="default-contact-ellipse" />
                <div className="default-contact-div" />
              </div>
            </div>
          </div>
          <div className="default-contact-address-detail-container">
            <div className="default-contact-address-detail-name-container">
              <p className="default-contact-address-detail-name">
                Devakarun. R
              </p>
              <button className="default-contact-address-detail-name-container-btn">
                Home
              </button>
            </div>
            <p className="default-contact-address-detail-address">
              131 a/20, v.m, street, vadakarai main road, vadakarai, Tenkasi,
              Tamilnadu - 627812.
            </p>
            <div className="default-contact-address-detail-mobile-container">
              <p>Mobile No: </p>
              <span>6380839448</span>
            </div>
            <div className="default-contact-address-detail-btn-container">
              <button className="default-contact-address-detail-remove">
                Remove
              </button>
              <button className="default-contact-address-detail-edit">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="add-new-address-container" onClick={onAddNewAddress}>
            <AddOutlinedIcon className="add-new-address-icon"/>
            <p className="add-new-address-para">Add new address</p>
        </div>
      </div>
    </div>
  );
}

export default DefaultContact;
