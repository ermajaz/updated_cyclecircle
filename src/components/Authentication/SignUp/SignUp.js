import React from "react";
import "./SignUp.css";
import SignUpProgressBar from "./SignUpProgressBar";
import BasicDetails from "./BasicDetails";
import SignUpSideBarStatus from "./SignUpSideBarStatus";
import DealershipDetails from "./DealershipDetails";
import DocumentDetails from "./DocumentDetails";
function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-status">
        <SignUpProgressBar />
      </div>
      <div className="sign-up-main-container">
        <SignUpSideBarStatus/>
        <div className="sign-up-form-main-container">
          {/* <BasicDetails /> */}
          {/* <DealershipDetails/> */}
          <DocumentDetails/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
