import React, { useState, useEffect, useRef } from "react";
import "./ProductSlider.css";
import "./Detail.css";
// import { Product } from "../../data";
import ProductPromices from "./ProductPromices";

function ProductSlider({selectProduct}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [ans, setAns] = useState([]);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const [selectedProduct, setSelectedProduct] = useState(ans);

  const slideRef = useRef();


  useEffect(() => {
  
    if (selectProduct && selectProduct.length > 0 && selectProduct[0].images) {
      const imagesArray = selectProduct[0].images[0] || [];
  
      const updatedAns = imagesArray.slice(0,4).map(imageUrl => {
        return "https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_PRODUCTS_IMAGE/" + imageUrl;
      });
  
      setAns(updatedAns);
    }
  }, [selectProduct]);

  useEffect(()=>{
    setSelectedProduct(ans);
  })
  // console.log(selectedProduct);

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  function plusSlides(n) {
    const newSlideIndex = slideIndex + n;

    if (newSlideIndex <= 0) {
      setSlideIndex(selectedProduct.length); // Wrap to the last image
    } else if (newSlideIndex > selectedProduct.length) {
      setSlideIndex(1); // Wrap to the first image
    } else {
      setSlideIndex(newSlideIndex);
    }

    slideShow(newSlideIndex <= 0 ? selectedProduct.length : newSlideIndex);
  }

  function slideShow(n) {
    if (n > selectedProduct.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(selectedProduct.length);
    }
  }

  function dragStart(e) {
    setStart(e.clientX);
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);




  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);
  return (
    <div className="product-page-img">
      <div className="big-images">
        {selectedProduct.map(
          (
            image,
            index // Added parentheses for the arrow function
          ) => (
            <div
              className="mySlides"
              key={index}
              style={{
                display: index + 1 === slideIndex ? "block" : "none",
              }}
            >
              <img src={image} alt="" />
            </div>
          )
        )}
        <a href="#!" className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a href="#!" className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>

      <div
        className="slider-img"
        draggable={true}
        ref={slideRef}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
      >
        {selectedProduct.map(
          (
            image,
            index // Added parentheses for the arrow function
          ) => (
            <div
              key={index}
              className={`slider-box ${
                index + 1 === slideIndex ? "active" : ""
              }`}
              onClick={() => setSlideIndex(index + 1)}
            >
              <img src={image} alt="" />
            </div>
          )
        )}
      </div>
      <ProductPromices />
    </div>
  );
}

export default ProductSlider;
