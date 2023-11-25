// SignUpSideBarStatus component
import React from 'react';
import "./SignupSideBarStatus.css";

function SignUpSideBarStatus() {
  return (
    <div className="sign-up-sidebar-status-container">
      <span className="sign-up-percentage-status">0 %</span>
      <div className="sign-up-sidebar-basic-details" style={{ background: "#9E3DCC" }}>
        <input type="radio" name="status" defaultChecked/>
        <div className="sign-up-sidebar-h4-span-merge">
          <h4 className="sign-up-sidebar-basic-header">Basic Details</h4>
          <span className="sign-up-sidebar-basic-details-desc">Compare information dealership</span>
        </div>
      </div>
      <div className="sign-up-sidebar-basic-details">
        <input type="radio" name="status" />
        <div className="sign-up-sidebar-h4-span-merge">
          <h4 className="sign-up-sidebar-basic-header">Dealership Details</h4>
          <span className="sign-up-sidebar-basic-details-desc">Compare information dealership</span>
        </div>
      </div>
      <div className="sign-up-sidebar-basic-details">
        <input type="radio" name="status" />
        <div className="sign-up-sidebar-h4-span-merge">
          <h4 className="sign-up-sidebar-basic-header">Documents Details</h4>
          <span className="sign-up-sidebar-basic-details-desc">Add all documents for your verification</span>
        </div>
      </div>
    </div>
  );
}

export default SignUpSideBarStatus;
