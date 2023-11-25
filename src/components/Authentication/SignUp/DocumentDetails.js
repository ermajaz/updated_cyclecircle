import React from "react";
import "./DocumentDetails.css";
import upload_logo from "../../../img/upload_layer.svg";
import { Link } from "react-router-dom";
function DocumentDetails() {
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    // You can now handle the selected file, for example, by uploading it to a server.
    // You may want to use a state to store the selected file or perform any other logic.
    console.log("Selected File:", selectedFile);
  };
  return (
    <div className="document-details-container">
      <h3 className="document-details-name">Documents Details</h3>
      <form className="document-details-main-container">
        <div className="document-detail-basic-detail-form-1">
          <fieldset>
            <legend>Aadhar number</legend>
            <input type="number" placeholder="Enter your aadhar name" />
          </fieldset>
          <fieldset>
            <legend>Pan number</legend>
            <input type="text" placeholder="Enter your pan number" />
          </fieldset>
          <fieldset>
            <legend>GST number</legend>
            <input type="text" placeholder="Enter your GST number" />
          </fieldset>
        </div>
        <div className="document-details-save-cancel-btn">
          <Link to="#" className="document-details-cancel-btn">
            Cancel
          </Link>
          <Link to="#" className="document-details-save-btn">
            Save
          </Link>
        </div>
      </form>
      <div
        className="document-detail-aadhar-upload-container"
        onClick={() => document.getElementById("uploadInput").click()}
      >
        <div className="document-detail-aadhar-upload-bordered-container">
          <img src={upload_logo} alt="upload_logo" />
          <p>Upload your aadhar</p>
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
      <div
        className="document-detail-pan-upload-container"
        onClick={() => document.getElementById("uploadInput").click()}
      >
        <div className="document-detail-pan-upload-bordered-container">
          <img src={upload_logo} alt="upload_logo" />
          <p>Upload your PAN</p>
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

export default DocumentDetails;
