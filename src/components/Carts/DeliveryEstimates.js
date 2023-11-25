import React from 'react'
import "./DeliveryEstimates.css"

function DeliveryEstimates() {
  return (
    <div className='delivery-estimates-container'>
        <h3>Delivery Estimates</h3>
        <div className="delivery-Product-container">
            <div className="deliveryImg-container">
              <img src="https://images.bike24.com/media/720/i/mb/19/99/7d/iconx-frame-steelfork-glokzin-teal-glossy-1-985567.jpg" />
            </div>
            <div className="deliveryProductDetails">
              <div className="deliveryProduct-details">
                <span className="delivery-product-name">Frame</span>
                <div className="deliveryProduct-delivery-date">
                  <p>Delivery by</p>
                  <span>20-Aug-2023</span>
                </div>
              </div>
            </div>
          </div>
        <div className="delivery-Product-container">
            <div className="deliveryImg-container">
              <img src="https://images.bike24.com/media/720/i/mb/19/99/7d/iconx-frame-steelfork-glokzin-teal-glossy-1-985567.jpg" />
            </div>
            <div className="deliveryProductDetails">
              <div className="deliveryProduct-details">
                <span className="delivery-product-name">Frame</span>
                <div className="deliveryProduct-delivery-date">
                  <p>Delivery by</p>
                  <span>20-Aug-2023</span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default DeliveryEstimates