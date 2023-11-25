import React from 'react'
import "./PriceDetail.css"

function PriceDetail({onCheckout}) {
  return (
    <div className='priceDetail-container'>
        <h3>Price Detail</h3>
          <div className="cartsProduct-price-container">
            <div className="cartsProduct-total-price">
              <p>Total MRP</p>
              <span>₹999.00</span>
            </div>
            <div className="cartsProduct-discount">
              <p>Discount on MRP</p>
              <span>₹100.00</span>
            </div>
            <div className="cartsProduct-delivery-charge">
              <p>Delivery Charge</p>
              <span>₹100.00</span>
            </div>
          </div>
          <div className="cartsProduct-total-checkout">
            <div className="cartsProduct-total-checkout-div">
              <p>Total</p>
              <span>₹999.00</span>
            </div>
            <button className="cartsProduct-btn" onClick={onCheckout}>Checkout</button>
          </div>
    </div>
  )
}

export default PriceDetail