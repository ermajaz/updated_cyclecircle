import React from "react";
import Breadcumb from "../components/ProductDescription/Breadcumb";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import AboutBrands from "../components/HomePage/Brands";
import ListingProduct from "../components/ListingPage/ListingProduct/ListingProduct";
import styled from "styled-components";

function ListingPage() {
  return (
    <div>
      <Header />
      <HeaderDiv><Breadcumb /></HeaderDiv>
        <ListingProduct />
        <AboutBrands />
        <Footer />
    </div>
  );
}

export default ListingPage;

const HeaderDiv = styled.div`
  width: 100%;
  height: 76px;
  position:fixed;
  top: 64px;
  z-index: 10;
  box-shadow: 1px 0 4px 1px gray;
`
