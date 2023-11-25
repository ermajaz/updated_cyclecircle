import React, { useState } from 'react';
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import set_password_icon from "../../img/set_password_icon.svg";
import ResetComplete from './ResetComplete';

function SetPassword({onClose}) {
  const [passwordReset, setPasswordReset] = useState(false);

  const handleResetPassword = () => {
    // Add logic to handle password reset
    // For now, let's simulate password reset by setting passwordReset to true
    setPasswordReset(true);
  };
  return (
    <>
    {!passwordReset ? (
      <div className="password-recovery-container">
      <div className="close-icon" onClick={onClose}>
        <CloseSharpIcon />
      </div>
      <span className="sign-up-side-btn">Sign up</span>
      <img src={set_password_icon} alt="password_logo" />
      <h2>Set new password</h2>
      <p style={{ fontSize: "0.75rem" }}>
        Your new password must be different from old password you used.
      </p>
      <p>
        Password should have 8 characters with at least one letter,number and
        special character.
      </p>
      <div className="confirm-password-form-container">
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="★★★★★★★★" />
          <label htmlFor="confirm_password">Confirm password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="★★★★★★★★"
          />
          <button onClick={handleResetPassword}>Reset password</button>
        </form>
      </div>
    </div>
    ):(
      <ResetComplete onClose={onClose}/>
    )}
    </>
    
  )
}

export default SetPassword