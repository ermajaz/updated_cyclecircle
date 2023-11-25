import React, { useState,useEffect} from "react";
import "./Detail.css";
import ProductSlider from "./ProductSlider";
import ProductAllInfo from "./ProductAllInfo";
import ProductPurchase from "./ProductPurchase";
import UserLoginPage from "./UserLoginPage";
import TypeSelect from "./TypeSelect";
import ProductBasicDetail from "./ProductBasicDetail";
import { useDispatch,useSelector } from "react-redux";
import {
  fetchProductDetailsAsync,
  selectProductDetails, setSelectedProd_ID
} from "../../features/productDesc/productDescSlice";
import { useParams } from "react-router";

function Detail() {
  const {prod_ID} = useParams();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const dispatch = useDispatch();
  const productSelect = useSelector(selectProductDetails);
  useEffect(()=>{
    async function fetchData(){
      await dispatch(setSelectedProd_ID(prod_ID))
      await dispatch(fetchProductDetailsAsync(prod_ID));
    }
    fetchData();
  },[dispatch,prod_ID]);
  // useEffect(()=>{
  //   console.log(productSelect);
  // })

  return (
    <React.Fragment>
      <section className="product-details">
        <ProductSlider selectProduct={productSelect.products}/>

        <div className="product-page-details">
          <ProductBasicDetail selectProduct={productSelect.products}/>
          <TypeSelect />
          {isLoggedIn ? (
            <ProductPurchase />
          ) : (
            <UserLoginPage handleLogin={handleLogin} />
          )}
        </div>
      </section>
      <ProductAllInfo productDesc={productSelect?.products}/>
    </React.Fragment>
  );
}

export default Detail;
