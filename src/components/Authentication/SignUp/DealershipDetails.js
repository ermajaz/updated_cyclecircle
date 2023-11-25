import React, { useState } from "react";
import "./DealershipDetails.css";
import { Link } from "react-router-dom";
import dealerlogo from "../../../img/dealer-logo.svg";
import editlogo from "../../../img/dealer-edit.svg";
import deletelogo from "../../../img/dealer-delete.svg";
import dealerlocation from "../../../img/dealer-location.svg";
import dealerphone from "../../../img/dealer-phone.svg";
import dealeremail from "../../../img/dealer-email.svg";
import dealerwarning from "../../../img/dealer-delete-warning.svg";

function DealershipDetails() {
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteOverlay(true);
  };

  const handleKeepItClick = () => {
    setShowDeleteOverlay(false);
  };

  const handleYesDeleteClick = () => {
    // Perform delete action here
    setShowDeleteOverlay(false);
  };
  return (
    <div className="dealsership-details-container">
      <h3 className="dealership-details-name">Dealership Details</h3>
      <div className="basic-detail-form-container">
        <form>
          <div
            className="basic-detail-from-container-half-width"
            style={{
              border: "2px solid var(--border-color)",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            <div className="basic-detail-basic-detail-form-1">
              <fieldset>
                <legend>Dealer name</legend>
                <input type="text" placeholder="Enter your first name" />
              </fieldset>
              <fieldset>
                <legend>Dealer name</legend>
                <input type="text" placeholder="Enter your second name" />
              </fieldset>
              <fieldset>
                <legend>Email id</legend>
                <input type="text" placeholder="Enter your email id" />
              </fieldset>
              <fieldset>
                <legend>Phone number</legend>
                <input type="number" placeholder="Enter your phone number" />
              </fieldset>
              <fieldset>
                <legend>Address 1</legend>
                <input type="text" placeholder="Address line 1" />
              </fieldset>
              <fieldset>
                <legend>Address 2</legend>
                <input type="text" placeholder="Address line 2" />
              </fieldset>
              <fieldset>
                <legend>City</legend>
                <input type="text" placeholder="Enter your city name" />
              </fieldset>
              <fieldset>
                <legend>District</legend>
                <input type="text" placeholder="Enter your district name" />
              </fieldset>
              <fieldset>
                <legend>State</legend>
                <input type="text" placeholder="Enter your state name" />
              </fieldset>
              <fieldset>
                <legend>Pincode</legend>
                <input type="number" placeholder="Enter your pincode " />
              </fieldset>
            </div>
            <div className="dealership-details-save-cancel-btn">
              <Link to="#" className="dealership-details-cancel-btn">
                Cancel
              </Link>
              <Link to="#" className="dealership-details-save-btn">
                Save
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="dealer-details-side-details-1">
        <img src={dealerlogo} alt="" className="user-image-logo" />
        <span className="dealer-name">Devakarun. R</span>
        <img src={editlogo} alt="" className="dealer-details-edit-logo" />
        <img src={dealeremail} alt="" className="dealer-emails-logo" />
        <span className="dealer-email">deva@cyclecircle.one</span>
        <img
          src={deletelogo}
          alt=""
          className="dealer-delete-detail"
          onClick={handleDeleteClick}
        />
        <img src={dealerphone} alt="" className="dealer-phone-logo" />
        <span className="dealer-phone-number">8949567329</span>
        <img src={dealerlocation} alt="" className="dealer-location-logo" />
        <p className="dealer-address-location">
          TOP,FLR,112, Shimla High Court, Shimla Urban (T), Shimla-171001,
          Himachal Pradesh
        </p>
      </div>
      <div
        className="dealer-details-delete-container"
        style={{ display: showDeleteOverlay ? "block" : "none" }}
      >
        <img src={dealerwarning} alt="" className="delete-warning-logo" />
        <span className="delete-dealership-1">Delete Dealership</span>
        <p className="delete-dealership-desc">
          You are going to delete the "Devakarun. R" dealership.Are you sure?
        </p>
        <Link to="#" className="keep-it-btn" onClick={handleKeepItClick}>
          No, Keep it.
        </Link>
        <Link to="#" className="yes-delete-btn" onClick={handleYesDeleteClick}>
          Yes, Delete!
        </Link>
      </div>
    </div>
  );
}

export default DealershipDetails;
