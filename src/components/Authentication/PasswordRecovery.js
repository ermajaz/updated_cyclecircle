import React, { useState } from "react";
import { Link } from "react-router-dom";
import password_recovery from "../../img/password_recovery.svg";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import SetPassword from "./SetPassword";
function PasswordRecovery({ onClose }) {
  const [codeEntered, setCodeEntered] = useState(false);

  const handleContinue = () => {
    // Add logic to validate the recovery code
    // For now, let's simulate validation by setting codeEntered to true
    setCodeEntered(true);
  };
  return (
    <>
      {!codeEntered ? (
        <div className="password-recovery-container">
          <div className="close-icon" onClick={onClose}>
            <CloseSharpIcon />
          </div>
          <span className="sign-up-side-btn">Sign up</span>
          <img src={password_recovery} alt="password_logo" />
          <h2>Password recovery code</h2>
          <p>We sent 6-digit password recovery code to your email.</p>
          <p>Enter the code to proceed.</p>
          <div className="otp-recovery-boxes">
            <input type="number" maxLength="1" />
            <input type="number" maxLength="1" />
            <input type="number" maxLength="1" />
            <input type="number" maxLength="1" />
            <input type="number" maxLength="1" />
            <input type="number" maxLength="1" />
          </div>
          <button className="otp-recovery-verify-btn" onClick={handleContinue}>Continue</button>
          <div className="dont-receive-code">
            <p style={{ marginRight: "5px" }}>Don't receive the code yet?</p>
            <Link to="#">Resend Code</Link>
          </div>
          <div className="back-to-login-container">
            <ArrowCircleLeftOutlinedIcon />
            <span>Back to Login</span>
          </div>
          <div className="email-not-receive">
            <p>Didn't receive the email? Check your spam folder</p>
            <p>
              or <Link to="#">Try another email address</Link>
            </p>
          </div>
        </div>
      ) : (
        <SetPassword onClose={onClose} />
      )}
    </>
  );
}

export default PasswordRecovery;
