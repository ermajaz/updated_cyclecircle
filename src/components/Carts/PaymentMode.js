import React from "react";
import "./PaymentMode.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import googlepay from "../../img/google-pay.png";
import phonepe from "../../img/phonepe.png";
import paypal from "../../img/paypal.png";
import bhim from "../../img/bhim.png";
import emi from "../../img/emi.png";
function PaymentMode() {
  return (
    <div className="payment-mode-container">
      <p className="payment-name">Choose payment mode</p>
      <div className="payment-mode-container-1">
        <div className="payment-mode-div">
          <div className="payment-mode-recommended">
            <StarBorderOutlinedIcon />
            <span>Recommended</span>
          </div>
          <div className="payment-mode-recommended-options">
            <div className="payment-mode-recommended-option">
              <CreditCardOutlinedIcon />
              <p>Credit/Debit Card</p>
            </div>
            <div className="payment-mode-recommended-option">
              <img src={bhim} style={{width:"25px",height:"25px"}}/>
              <p>GPay/PhonePe/BHIM UPI</p>
            </div>
            <div className="payment-mode-recommended-option">
              <WalletOutlinedIcon />
              <p>Paytm/Wallet</p>
            </div>
            <div className="payment-mode-recommended-option">
              <AccountBalanceOutlinedIcon />
              <p>Net Banking</p>
            </div>
            <div className="payment-mode-recommended-option">
              <img src={emi} style={{width:"25px",height:"25px"}}/>
              <p>EMI/Pay Later</p>
            </div>
          </div>
        </div>
        <div className="payment-mode-options">
          <span className="payment-mode-options-name">
            Recommended Payment Options
          </span>
          <div className="payment-mode-card-options">
            <div className="payment-mode-card-option">
              <div className="payment-mode-card-option-div">
                <input type="radio" name="card" />
                <span className="payment-mode-card-name">Card</span>
              </div>
              <div className="payment-mode-card-option-icon">
                <CreditCardOutlinedIcon />
              </div>
            </div>
            <div className="payment-mode-card-option">
              <div className="payment-mode-card-option-div">
                <input type="radio" name="card" />
                <span className="payment-mode-card-name">Google Pay</span>
              </div>
              <div className="payment-mode-card-option-icon">
                <img src={googlepay}/>
              </div>
            </div>
            <div className="payment-mode-card-option">
              <div className="payment-mode-card-option-div">
                <input type="radio" name="card" />
                <span className="payment-mode-card-name">PhonePe</span>
              </div>
              <div className="payment-mode-card-option-icon">
                <img src={phonepe} />
              </div>
            </div>
            <div className="payment-mode-card-option">
              <div className="payment-mode-card-option-div">
                <input type="radio" name="card" />
                <span className="payment-mode-card-name">PayPal</span>
              </div>
              <div className="payment-mode-card-option-icon">
                <img src={paypal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMode;
