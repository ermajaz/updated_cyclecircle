import React from 'react'
import Breadcumb from '../components/ProductDescription/Breadcumb';
import Detail from '../components/ProductDescription/Detail';
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import SimilarProduct from '../components/ProductDescription/SimilarProduct';
import AboutBrands from '../components/ProductDescription/AboutBrands';
import Brands from "../components/HomePage/Brands";

function ProductDescription() {
  return (
    <div>
      <Header/>
      <Breadcumb/>
      <Detail/>
      <AboutBrands/>
      <SimilarProduct/>
      <Brands/>
      <Footer/>
    </div>
  )
}

export default ProductDescription;

