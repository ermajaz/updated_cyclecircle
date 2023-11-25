import React, { useState, useEffect, useRef } from "react";
import "./ProductAllInfo.css";
import { Product } from "../../data";
import Description from "./Description";
import RatingsReviews from "./Ratings_Reviews";
import Discover from "./Discover";
import TechnicalData from "./TechnicalData";
import vector_black from "../../icons/Vector_black.svg";
import vector_white from "../../icons/Vector_white.svg";
import data_black from "../../icons/data_black.svg";
import data_white from "../../icons/data_white.svg";
import review_black from "../../icons/review_black.svg";
import review_white from "../../icons/review_white.svg";
import play_black from "../../icons/play_black.svg";
import play_white from "../../icons/play_white.svg";

function ProductAllInfo({productDesc}) {

  const [infoTitle, setInfoTitle] = useState("Compatibility");



  return (
    <div className="product-all-info">
      <ul className="product-info-menu">
        <li
          onClick={() => setInfoTitle("Compatibility")}
          className={`p-info-list ${
            "Compatibility" === infoTitle ? "active" : ""
          }`}
        >
          <img
            className="info-img-compatibility"
            src={`${
              "Compatibility" === infoTitle ? vector_white : vector_black
            }`}
            alt=""
          />
          Compatibility
        </li>
        <li
          onClick={() => setInfoTitle("Technical Data")}
          className={`p-info-list ${
            "Technical Data" === infoTitle ? "active" : ""
          }`}
          style={{
            background: `${"Technical Data" === infoTitle ? "#3a9978" : ""}`,
          }}
        >
          <img
            className="info-img"
            src={`${"Technical Data" === infoTitle ? data_white : data_black}`}
            alt=""
          />
          Technical Data
        </li>
        <li
          onClick={() => setInfoTitle("How To")}
          className={`p-info-list ${"How To" === infoTitle ? "active" : ""}`}
          style={{ background: `${"How To" === infoTitle ? "#d49896" : ""}` }}
        >
          <img
            className="info-img"
            src={`${"How To" === infoTitle ? play_white : play_black}`}
            alt=""
          />
          How To
        </li>
        <li
          onClick={() => setInfoTitle("Reviews")}
          className={`p-info-list ${"Reviews" === infoTitle ? "active" : ""}`}
          style={{
            background: `${"Reviews" === infoTitle ? "purple" : ""}`,
          }}
        >
          <img
            className="info-img"
            src={`${"Reviews" === infoTitle ? review_white : review_black}`}
            alt=""
          />
          Reviews
        </li>
      </ul>
      {Product.infos.map((info) => (
        <div
          key={info.title}
          className={`info-container ${
            info.title === infoTitle ? "active" : ""
          }`}
        >
          {info.title === "Reviews" && <RatingsReviews />}
          {info.title === "Technical Data" && <TechnicalData productDesc={productDesc}/>}
          {info.title === "How To" && <Discover />}
          {info.title === "Compatibility" && <Description />}
        </div>
      ))}
    </div>
  );
}

export default ProductAllInfo;
