import React from "react";
import Carts_Breadcrum from "../components/Carts/Carts_Breadcrum";
import CartsProduct from "../components/Carts/CartsProduct";
import LikeProduct from "../components/Wishlist/LikeProduct";
import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";

function Carts() {
  return (
    <>
    <Header/>
      <Carts_Breadcrum/>
      <CartsProduct/>
      <LikeProduct/>
      <Footer/>
    </>
  );
}

export default Carts;
