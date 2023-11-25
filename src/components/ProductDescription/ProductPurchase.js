import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShippingInfo from "./ShippingInfo";
import delivery_light_black from "../../img/delivery_light_black.svg";
import bolt_black from "../../img/bolt_black.svg";
import delivery_light from "../../img/delivery_light.svg";
import bolt from "../../img/bolt.svg";


function ProductPurchase() {

  const [cartVal, setCartVal] = useState(0);


  const [isAdded, setIsAdded] = useState(false);


  const [shippingOpen, setShippingOpen] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleRequestMore = () => {
    setRequestSubmitted(true);

    setTimeout(() => {
      setRequestSubmitted(false);
    }, 2000); // Remove message after 3 seconds (3000 milliseconds)
  };

  const handleShipping = () => {
    setShippingOpen(!shippingOpen);
  };

  const [selectedShippingMode, setSelectedShippingMode] = useState("standard");

  const handleSelectShippingMode = (mode) => {
    setSelectedShippingMode(mode);
  };

  const [showShippingInfo, setShowShippingInfo] = useState(false);

  const openShippingInfo = () => {
    const container = document.querySelector(".info-shippingInfo-container");
    setShowShippingInfo((prev) => !prev); // Toggle the state
    if (!showShippingInfo) {
      container.style.opacity = "1"; // Show the container
      setTimeout(() => {
        setShowShippingInfo(false); // Close after 8 seconds
        container.style.opacity = "0"; // Hide the container after 8 seconds
      }, 8000);
    }
  };

  const toggleAdded = () => {
    setIsAdded((prev) => !prev);
  };

  const infoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        // Clicked outside the component, you can close it here
        setShippingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function increaseCarts(cartVal) {
    if (cartVal === 6) {
      return;
    }
    setCartVal(cartVal + 1);
  }
  function decreaseCarts() {
    if (cartVal <= 0) {
      setCartVal(cartVal);
      return;
    }
    setCartVal(cartVal - 1);
  }

  return (
    <div className="product-purchase">
    <div className="product-pricing-details">
      <div className="product-pricing-div">
        <p>Price Per Quantity</p>
        <span>₹1240.00</span>
      </div>
      <div className="product-pricing-div">
        <p>GST</p>
        <span>₹50.00</span>
      </div>
      <div className="product-pricing-div">
        <p>Shipping To</p>
        <span>Logan</span>
      </div>
      <div
        className="info-shippingInfo-container"
        style={{ opacity: showShippingInfo ? 1 : 0 }}
      >
        {showShippingInfo && (
          <ShippingInfo onClose={openShippingInfo} />
        )}
      </div>
      <div className="product-pricing-div">
        <p>Shipping Mode</p>
        <InfoOutlinedIcon onClick={openShippingInfo} />

        <div ref={infoRef}
          className="shipping-select"
          onClick={() => handleShipping()}
        >
          <img
            src={
              selectedShippingMode === "standard"
                ? delivery_light_black
                : bolt_black
            }
            alt=""
          />
          <span>
            {selectedShippingMode === "standard"
              ? "Standard"
              : "Express"}
          </span>
          {shippingOpen ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </div>
      </div>
      <div className="product-pricing-div-container">
        {shippingOpen && (
          <div ref={infoRef} className="product-shipping-div">
            <div>
              <input
                type="radio"
                name="shippingMode"
                value="standard"
                checked={selectedShippingMode === "standard"}
                onChange={() => handleSelectShippingMode("standard")}
                onClick={() => handleShipping()}
              />
              <img src={selectedShippingMode === "standard"?delivery_light:delivery_light_black} alt="" />
              <span
                style={{
                  color:
                    selectedShippingMode === "standard"
                      ? "#3a9978"
                      : "black",
                }}
              >
                Standard
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="shippingMode"
                value="express"
                checked={selectedShippingMode === "express"}
                onChange={() => handleSelectShippingMode("express")}
                onClick={() => handleShipping()}
              />
              <img src={selectedShippingMode === "express"?bolt:bolt_black} alt="" />
              <span
                style={{
                  color:
                    selectedShippingMode === "express"
                      ? "#3a9978"
                      : "black",
                }}
              >
                Express
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="product-pricing-div">
        <p>Shipping Cost</p>
        <span>₹250.00</span>
      </div>
      <div className="product-pricing-div">
        <p className="total-price-text">Total Price</p>
        <span className="total-price-text">₹1540.00</span>
      </div>
    </div>
    <div className="product-carts">
      <div className="product-carts-counter-div">
        <p>Quantity:</p>
        <div className="product-counter-invertory">
          <div className="product-counter">
            <KeyboardArrowDownIcon
              style={{
                background: "#003765",
                borderRadius: "50px",
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
              onClick={() => decreaseCarts(cartVal)}
            />
            <span>{cartVal}</span>
            <KeyboardArrowUpIcon
              style={{
                background:
                  cartVal === 6 ? "rgb(165, 157, 159)" : "#003765",
                borderRadius: "50px",
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
              onClick={() => increaseCarts(cartVal)}
            />
          </div>
        </div>
        {cartVal === 6 ? (
          <div className="max-inventery-count-request">
            <span className="max-inventery-count">
              <div>
                <sup>*</sup>only 6 units in stocks!
              </div>
            </span>
            {requestSubmitted && (
              <div className={`request-submitted-success ${requestSubmitted ? 'open' : ''}`}>
                {/* <TaskAltOutlinedIcon /> */}
                <iframe
                  src="https://giphy.com/embed/QJ4Hm8oJgMJIqFAuVc"
                  width="50"
                  height="50"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <span>
                  Your request has been submitted successfully!
                </span>
              </div>
            )}
            <span
              className="product-request-more"
              onClick={handleRequestMore}
            >
              Request more
            </span>
          </div>
        ) : (
          <div className="product-inStock">
            <CheckBoxOutlinedIcon />
            <span>in Stock</span>
          </div>
        )}
      </div>
      <div className="product-buy">
        <a href="#!" className="add-cart" onClick={toggleAdded}>
          {isAdded ? (
            <>
              <DoneOutlineOutlinedIcon
                style={{
                  background: "white",
                  borderRadius: "50px",
                  color: "black",
                  padding: "5px",
                  width: "38px",
                  height: "38px",
                  marginRight: "40px",
                  color: "green",
                }}
              />
              Added
            </>
          ) : (
            <>
              <ShoppingCartOutlinedIcon
                style={{
                  background: "white",
                  borderRadius: "50px",
                  color: "black",
                  padding: "5px",
                  width: "38px",
                  height: "38px",
                  marginRight: "20px",
                }}
              />
              Add to Carts
            </>
          )}
        </a>
        <a href="#!" className="buy-now">
          <LocalMallOutlinedIcon
            style={{
              background: "rgb(216 200 15)",
              borderRadius: "50px",
              color: "black",
              padding: "5px",
              width: "38px",
              height: "38px",
            }}
          />
          <span style={{ marginRight: "25px" }}>Buy Now</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProductPurchase;