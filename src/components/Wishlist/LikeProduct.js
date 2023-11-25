import React from 'react'
import "./LikeProduct.css";
import LikeProductCard from "./LikeProductCard";

function LikeProduct() {
  return (
    <div className='likeproudct-container'>
        <div className='liketext-container'>
            <h3>Products You May Like</h3>
        </div>
        <div className='likeproductcard-container'>
            <LikeProductCard/>
        </div>
    </div>
  )
}

export default LikeProduct