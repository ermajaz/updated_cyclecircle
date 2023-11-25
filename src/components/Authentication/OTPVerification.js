import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setOTPVerified } from '../../store/slices/userSlice';

function OTPVerification({ phoneNumber, setOTPVerified }) {
  const handleVerifyOTP = () => {
    setOTPVerified(true);
  };
  return (
    <div className="otp-verification-container">
      <p className="sent-code">We sent you a code</p>
      <p>Please enter it below to verify your phone number</p>
      <span>{phoneNumber}</span>
      {/* Add your 6-digit OTP input boxes here */}
      <div className="otp-input-boxes">
        {/* Example: */}
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
      </div>
      <div className="dont-receive-code">
        <p>Don't receive the code yet?</p>
        <Link to="#">send again</Link>
      </div>
      <button className="otp-verify-btn" onClick={handleVerifyOTP}>
        Verify
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // You can map any state needed for the OTPVerification component here
});

const mapDispatchToProps = {
  setOTPVerified,
};

export default connect(mapStateToProps, mapDispatchToProps)(OTPVerification);