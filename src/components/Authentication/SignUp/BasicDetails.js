import React from "react";
import { Link } from "react-router-dom";
import "./BasicDetails.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import upload_logo from "../../../img/upload_layer.svg";

function BasicDetails() {
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    // You can now handle the selected file, for example, by uploading it to a server.
    // You may want to use a state to store the selected file or perform any other logic.
    console.log('Selected File:', selectedFile);
  };
  return (
    <div className="basic-detail-main-container">
      <h3 className="detail-page-name">Basic Details</h3>
      <div className="basic-detail-form-container">
        <form>
          <div className="basic-detail-from-container-half-width">
            <div className="basic-detail-basic-detail-form-1">
              <fieldset>
                <legend>First name</legend>
                <input type="text" placeholder="Enter your first name" />
              </fieldset>
              <fieldset>
                <legend>Second name</legend>
                <input type="text" placeholder="Enter your second name" />
              </fieldset>
              <fieldset>
                <legend>Email id</legend>
                <input type="email" placeholder="Enter your email id" />
              </fieldset>
              <fieldset>
                <legend>Phone number</legend>
                <input type="phone" placeholder="Enter your phone number" />
              </fieldset>
            </div>
            <fieldset className="basic-detail-phone-email-verfication">
              <legend>Verification</legend>
              <span>You have to verify either Phone number or Email</span>
              <div className="basic-detail-phone-email-verfication-main-div">
                <span>Verify via</span>
                <div className="basic-detail-phone-email-verification-btn">
                  <Link to="#">Phone number</Link>
                  <span>- or -</span>
                  <Link to="#">Email id</Link>
                </div>
              </div>
            </fieldset>
            <div className="basic-detail-basic-detail-form-1">
              <fieldset>
                <legend>Date of birth</legend>
                <input type="date" />
              </fieldset>
              <div className="basic-detail-form-2-gender">
                <fieldset>
                  <legend style={{ marginLeft: "-15px" }}>Gender</legend>
                  <input type="radio" name="gender" />
                  Male
                  <input type="radio" name="gender" />
                  Female
                </fieldset>
              </div>
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
                <input
                  type="number"
                  name="pincode"
                  placeholder="Enter your pincode"
                />
              </fieldset>
              <fieldset>
                <legend>Password</legend>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
              </fieldset>
              <fieldset>
                <legend>Confirm Password</legend>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Enter password"
                />
              </fieldset>
            </div>
            <div className="basic-detail-form-instruction">
              <InfoOutlinedIcon />
              <span>
                Password should contain atleast one letter,number and a special
                character
              </span>
            </div>
          </div>
          <Link to="#" className="basic-details-save-continue-btn">
            Save & Continue
          </Link>
        </form>
      </div>
      <div className="basic-detail-photo-upload-container" onClick={() => document.getElementById('uploadInput').click()}>
        <div className="basic-detail-photo-upload-bordered-container">
          <img src={upload_logo} alt="upload_logo" />
          <p>Upload your photo</p>
          <span>Drag & Drop</span>
          <Link to="#">Browse</Link>
        </div>
        <input
          type="file"
          id="uploadInput"
          style={{ display: "none" }}
          onChange={(e) => handleImageUpload(e)}
        />
      </div>
    </div>
  );
}

export default BasicDetails;
