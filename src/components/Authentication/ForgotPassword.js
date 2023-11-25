import React, { useState } from "react";
import fingerprint_password from "../../img/fingerprint_password.svg";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PasswordRecovery from "./PasswordRecovery";

function ForgotPassword({ onClose }) {
  const [sentEmail, setSentEmail] = useState(false);

  const handleSendEmail = () => {
    // Add logic to send the recovery email
    // For now, let's simulate sending the email
    setSentEmail(true);
  };

  return (
    <>
      {!sentEmail ? (
        <div className="forgot-password-container">
          <div className="close-icon" onClick={onClose}>
            <CloseSharpIcon />
          </div>
          <span className="sign-up-side-btn">Sign up</span>
          <img src={fingerprint_password} alt="password_logo" />
          <h2>Forgot Password?</h2>
          <p>
            Enter the email associated with the account, and we'll send an email
            with instructions on how to recover your password
          </p>
          <div className="forgot-password-form-container">
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email" />
              <button onClick={handleSendEmail}>Send</button>
            </form>
          </div>
          <div className="back-to-login-container">
            <ArrowCircleLeftOutlinedIcon />
            <span>Back to Login</span>
          </div>
        </div>
      ) : (
        <PasswordRecovery onClose={onClose} />
      )}
    </>
  );
}

export default ForgotPassword;
