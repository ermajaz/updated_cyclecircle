import React, { useState, useEffect, useRef } from "react";
import "./Detail.css";
import { Product } from "../../data";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useSelector,useDispatch } from "react-redux";
import { setSelectedColor } from '../../store/slices/colorSlice';

function TypeSelect() {
  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);

  // const [selectedColor, setSelectedColor] = useState(Product.colors[0]);
  const [selectedProduct, setSelectedProduct] = useState([
    Product.images.blueColor,
  ]);
  const selectedColor = useSelector((state) => state.color.selectedColor);

  const dispatch = useDispatch();

  const [selectedComponent, setSelectedComponent] = useState("size");

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectColor, setSelectColor] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const sizeTabRef = useRef(null);
  const colorTabRef = useRef(null);
  const variantTabRef = useRef(null);

  const handleSelectSize = (size) => {
    setSelectedSize(size);
    setSelectedComponent("color");
    colorTabRef.current.focus(); // Focus on the color tab
  };

  const handleSelectColor = (color) => {
    setSelectColor(color);
    setSelectedComponent("variant");
    variantTabRef.current.focus(); // Focus on the variant tab
    dispatch(setSelectedColor(color));
    setSelectColor(color);

  };

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  const slideRef = useRef();

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
    if (n > Product.images.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(Product.images.length);
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  const setSelectedImg = (color) => {
    // console.log("selectColor",selectedColor);
    if (color === "blue") {
      setSelectedProduct(Product.images.blueColor);
    } else if (color === "yellow") {
      setSelectedProduct(Product.images.yellowColor);
    } else if (color === "gray") {
      setSelectedProduct(Product.images.greyColor);
    } else {
      setSelectedProduct(Product.images.purpleColor);
    }
  };
  useEffect(() => {
    setSelectedImg();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="product-select-tabs-container">
        <div
          ref={sizeTabRef}
          className="product-select-tab"
          style={{
            border:
              selectedComponent === "size"
                ? "2px solid #595757"
                : "2px solid #CACACA",
          }}
          onClick={() => handleSelectComponent("size")}
        >
          <span className="select-tabs-value-pick">Size</span>
          {selectedSize && (
            <span className="select-tabs-value">
              {selectedSize}
              <CloseSharpIcon
                style={{ fontSize: "16px", marginLeft: "4px" }}
                onClick={() => setSelectedSize(null)}
              />
            </span>
          )}
        </div>
        <div
          ref={colorTabRef}
          className="product-select-tab"
          style={{
            border:
              selectedComponent === "color"
                ? "2px solid #595757"
                : "2px solid #CACACA",
          }}
          onClick={() => handleSelectComponent("color")}
        >
          <span className="select-tabs-value-pick">Color</span>
          {selectColor && (
            <span
              className="select-tabs-value"
              style={{
                padding: "5px",
                background: "white",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                style={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "8px",
                  background: selectColor,
                }}
              />
              <CloseSharpIcon
                style={{
                  fontSize: "16px",
                  marginLeft: "4px",
                  color: "black",
                }}
                onClick={() => setSelectColor(null)}
              />
            </span>
          )}
        </div>
        <div
          ref={variantTabRef}
          className="product-select-tab"
          style={{
            border:
              selectedComponent === "variant"
                ? "2px solid #595757"
                : "2px solid #CACACA",
          }}
          onClick={() => handleSelectComponent("variant")}
        >
          <span className="select-tabs-value-pick">Varient</span>
          {selectedVariant && (
            <span className="select-tabs-value">
              {selectedVariant}
              <CloseSharpIcon
                style={{ fontSize: "16px", marginLeft: "4px" }}
                onClick={() => setSelectedVariant(null)}
              />
            </span>
          )}
        </div>
      </div>
      <div className="product-size-variant-color">
        {selectedComponent === "size" && (
          <div className="product-size">
            <label htmlFor="size">Choose Size:</label>
            <select
              name="size"
              id="size"
              onChange={(e) => handleSelectSize(e.target.value)}
            >
              <option>Chose Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        )}
        {selectedComponent === "color" && (
          <div className="product-options">
            <span>Colors:</span>
            <div className="product-colors">
              {Product.colors.map((color) => (
                <div
                  key={color}
                  className={color === selectedColor ? "active" : ""}
                  onClick={() => {
                    handleSelectColor(color);
                    // setSelectedColor(color);
                    setSelectedImg(color);
                  }}
                >
                  <button
                    className={color === selectedColor ? "active" : ""}
                    style={{ background: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedComponent === "variant" && (
          <div className="product-varients-container">
            {selectedProduct.map((items) => (
              <div
                style={{
                  border: `2px solid ${
                    items.Varientname === selectedVariant
                      ? "#003765"
                      : "#CACACA"
                  }`,
                }}
                className="product-varient-container"
                onClick={() => {
                  handleSelectVariant(items.Varientname);
                  setSelectedVariant(items.Varientname);
                }}
              >
                <img src={items.src} alt="" />
                <span className="product-varient-name">
                  {items.Varientname}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TypeSelect;
