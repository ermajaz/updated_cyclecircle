import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import googleAuth from "../../img/googleAuth.png";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import OTPVerification from "./OTPVerification";
import ForgotPassword from "./ForgotPassword"
import { connect } from 'react-redux';
import {
  setLoginMode,
  setPhoneNumber,
  setSentEmail,
  setCodeEntered,
  setPasswordReset,
  setIsComplete,
  setOTPVerified,
} from '../../store/slices/userSlice';

function LoginPage({
  user,
  setLoginMode,
  setPhoneNumber,
  setSentEmail,
  setCodeEntered,
  setPasswordReset,
  setIsComplete,
  setOTPVerified,
  onClose
}) {
  const {
    loginMode,
    phoneNumber,
    sentEmail,
    codeEntered,
    passwordReset,
    isComplete,
    otpVerified,
  } = user;

  const toggleLoginMode = () => {
    setLoginMode((prevMode) => (prevMode === "password" ? "otp" : "password"));
  };

  const handleSendOTP = () => {
    setPhoneNumber("8009839747");
  };

  const handleLoginViaPassword = () => {
    setLoginMode("password");
  };

  const handleForgotPasswordClick = () => {
    setLoginMode("forgotPassword");
  };

  const handleSendEmail = () => {
    setSentEmail(true);
  };

  const handleContinue = () => {
    setCodeEntered(true);
  };

  const handleResetPassword = () => {
    setPasswordReset(true);
  };

  const handleIsComplete = () => {
    setIsComplete(true);
  };


  return (
    <div className="loginPage-container">
      {loginMode === "forgotPassword" ? (
        <ForgotPassword onClose={() => setLoginMode("password")} />
      ) : (
        <>
          <div className="close-icon" onClick={onClose}>
            <CloseSharpIcon />
          </div>
          <h2>Welcome to cyclecircle!</h2>
          <div className="google-auth">
            <img src={googleAuth} alt="Google" />
            <span>Continue with Google</span>
          </div>
          <div className="hr-separation">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <div className="form-container">
            {phoneNumber ? (
              <OTPVerification
                phoneNumber={phoneNumber}
                onLoginViaPassword={handleLoginViaPassword}
              />
            ) : (
              <>
                {loginMode === "password" ? (
                  <form>
                    <input type="text" placeholder="Email or Phone number" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                  </form>
                ) : (
                  <form>
                    <input
                      type="number"
                      placeholder="Phone number"
                      maxLength="10"
                    />
                    <button onClick={handleSendOTP}>Send OTP</button>
                  </form>
                )}
              </>
            )}
            <div className="forgotPassword-login-via-otp-container">
              <Link to="#" onClick={handleForgotPasswordClick}>Forgot Password?</Link>
              {loginMode === "password" ? (
                <Link to="#" onClick={toggleLoginMode}>
                  Login via OTP
                </Link>
              ) : (
                <Link to="#" onClick={handleLoginViaPassword}>
                  Login with password
                </Link>
              )}
            </div>
          </div>
          <div className="dont-have-an-account">
            <p>Don't have an account?</p>
            <Link to="/sign-up">Sign up</Link>
          </div>
          <hr className="signUp-separation" />
          <div className="check-pincode-availability-cyclecircle-info">
            <p>
              CycleCircle is currently meant only for Dealership. If you are a
              customer, please visit a nearby shop to get the dealership.
            </p>
            <p>To find the nearby dealership, please enter your pincode:</p>
            <div className="check-pincode-availability">
              <input type="number" placeholder="Pincode" />
              <button>Check</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setLoginMode,
  setPhoneNumber,
  setSentEmail,
  setCodeEntered,
  setPasswordReset,
  setIsComplete,
  setOTPVerified,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
