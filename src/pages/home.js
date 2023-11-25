import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import Brands from "../components/HomePage/Brands";
import Navigation from "../components/Navigation/Navigation";
import Promises from "../components/HomePage/Promises";
import BrandSpotlight from "../components/HomePage/BrandSpotlight";
import Banner from "../components/HomePage/Banner";
import HotDeals from "../components/HomePage/HotDeals";
function Home() {
  return (
    <>
      <div className="Home">
        <Header />
          <Navigation />
          <Banner />
          <HotDeals />
          <Promises />
          <BrandSpotlight />
          <Brands />
        <Footer />
      </div>
    </>
  );
}

export default Home;