import React, { useState } from "react";

function UserLoginPage({handleLogin}) {
  const [activeTab, setActiveTab] = useState("cycleDealer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="User-login-page-product-page-container">
      <div className="user-login-text-container">
        <p>You are not logged in Please login to make a purchase</p>
        <span>Are you a?</span>
      </div>
      <div className="user-login-tabs-container">
        <span
          className={activeTab === "cycleDealer" ? "active-tab" : ""}
          onClick={() => handleTabClick("cycleDealer")}
        >
          Cycle Dealer
        </span>
        <span
          className={activeTab === "customer" ? "active-tab" : ""}
          onClick={() => handleTabClick("customer")}
        >
          Customer
        </span>
      </div>
      {activeTab === "cycleDealer" && (
        <div className="dealership-page-detail">
          <button
            className="dealership-login-now"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <span style={{ color: "#595757" }}>- or -</span>
          <button className="dealership-register-now">Register Now</button>
          <div className="register-user-cyclecircle">
            <h3>Register now in Cyclecircle.one</h3>
            <p>
              25 minutes rapid onboarding make your first ever purchasing in
              Cyclecircle.one
            </p>
          </div>
        </div>
      )}
      {activeTab === "customer" && (
        <div className="customer-page-detail">
          <p>To find the nearby dealership please enter your pincode:</p>
          <div className="customer-search-pincode">
            <input type="text" placeholder="Pincode" />
            <button className="customer-check-btn">Check</button>
          </div>
          <p>
            Find the nearest Cyclecircle.one dealership to make your purchase
            directly.
          </p>
        </div>
      )}
    </div>
  );
}

export default UserLoginPage;
