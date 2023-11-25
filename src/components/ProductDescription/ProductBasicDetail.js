import React, { useEffect, useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import FavShare from "./FavShare";
import { useDispatch } from "react-redux";
import { setBreadcrumb } from "../../store/slices/breadCrumbsSlice";

function ProductBasicDetail({ selectProduct }) {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState();
  let verticalID;

  const handleverticalID = () => {
    if (selectedProduct && selectedProduct.verticalName === "PARTS") {
      verticalID = 1;
    } else if (selectedProduct && selectedProduct.verticalName === "ACCESORIES(A)") {
      verticalID = 2;
    } else {
      verticalID = 3;
    }
  };

  useEffect(() => {
    if (selectProduct && selectProduct.length > 0) {
      const firstProduct = selectProduct[0] || [];
      setSelectedProduct(firstProduct);
      handleverticalID();
      // console.log("firstProduct",firstProduct);

      // Set product name in breadcrumb
      dispatch(
        setBreadcrumb({
          verticalName:firstProduct.verticalName,
          verticalID: verticalID,
          CategoryID:null,
          category: firstProduct.categoryName,
          subCategory: firstProduct.subcategoryName,
          productName: firstProduct.prod_name.slice(0, 15),
          ProductID:firstProduct.prod_ID,
        })
      );
    }
  }, [selectProduct, dispatch]);
  if (!selectedProduct) {
    return null;
  }

  // Function to format numbers with commas
  const formatWithCommas = (number) => {
  if (typeof number !== 'number') {
    return number; // Return the original value if it's not a number
  }

  const formattedNumber = number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "");
  const parts = formattedNumber.split(".");

  if (parts.length > 1) {
    const lakhPlace = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${lakhPlace}.${parts[1]}`;
  }

  return formattedNumber;
};
  const mrpPrice = formatWithCommas(parseInt(selectedProduct.SKU[0]?.MRP_price));
  const discountedPrice = formatWithCommas(
    parseInt(Math.round(selectedProduct.SKU[0]?.MRP_price - (selectedProduct.SKU[0]?.MRP_price * 20) / 100).toFixed(2))
  );

  const fullStars = Math.floor(selectedProduct.net_rating);
  const hasHalfStar = selectedProduct.net_rating % 1 !== 0;

  const formatedBrandName = selectedProduct.SKU[0].manufacture_name.toUpperCase();

  return (
    <>
      <div className="product-container">
        <div className="product-container-detail">
          <p className="product-category">{formatedBrandName}</p>
          <strong>{selectedProduct.prod_name}</strong>
          <div className="product-rating">
            {[...Array(fullStars)].map((_, index) => (
              <StarRoundedIcon key={index} />
            ))}
            {hasHalfStar && <StarHalfRoundedIcon />}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
              <StarOutlineRoundedIcon key={index} />
            ))}
            <p>({parseFloat(selectedProduct.net_rating).toFixed(1)})</p>
          </div>
        </div>
        <FavShare />
      </div>
      <div className="product-price-detail">
        <div className="product-price-detail-share-pop">
          <p className="product-price">
            <span style={{ fontSize: "2.1rem" }}>₹{discountedPrice || ""}</span>
            <del className="product-price-del">₹{mrpPrice ? mrpPrice : ""}</del>
          </p>
          <p className="inclusive">
            (inclusive of all taxes)
            <span className="product-price-discount">20% OFF</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductBasicDetail;
