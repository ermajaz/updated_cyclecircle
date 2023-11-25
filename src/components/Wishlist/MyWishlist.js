import React from "react";
import "./MyWishlist.css";
import ProductCard from "./ProductCard";
import { wishlists } from "../../data";

function MyWishlist() {
  let size = wishlists.length;
  return (
    <div className="mywishlist-container">
      <div className="text-container">
        <h3>My Wishlist</h3>
        <span>({size} Items)</span>
      </div>
      <div className="product-card-container">
        <ProductCard />
      </div>
    </div>
  );
}

export default MyWishlist;
