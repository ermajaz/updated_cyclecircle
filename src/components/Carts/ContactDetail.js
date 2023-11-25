import React from 'react'
import "./ContactDetail.css"

function ContactDetail() {
  return (
    <div className='contact-detail-container'>
        <div className='contact-detail'>
            <label>Contact Details</label>
            <input type='text' placeholder='Name*'/>
            <input type='number' placeholder='Mobile No*'/>
        </div>
        <div className='address-detail'>
            <label>Address</label>
            <input type='text' placeholder='Address (House No., Street, Area etc.,)*'/>
            <input type='text' placeholder='Locality*'/>
            <input type='number' placeholder='Pincode*'/>
            <div className='district-state'>
                <input type='text' placeholder='District*'/>
                <input type='text' placeholder='State*'/>
            </div>
        </div>
        <div className='address-btn'>
            <h3>Save Address as</h3>
            <div className='detail-btn'>
            <button className='address-home'>Home</button>
            <button className='address-work'>Work</button>
            </div>
            <div className='checkbox-detail'>
                <input type='checkbox'/>
                <p>Make this as my default address</p>
            </div>
            <button className='contact-btn'>Add Address</button>
        </div>
        
    </div>
  )
}

export default ContactDetail