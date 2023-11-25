import React from "react";
import MyWishlist from "../components/Wishlist/MyWishlist";
import LikeProduct from "../components/Wishlist/LikeProduct";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

function Wishlist() {
  return (
    <div>
      <Header />
      <MyWishlist />
      <LikeProduct/>
      <Footer />
    </div>
  );
}

export default Wishlist;
