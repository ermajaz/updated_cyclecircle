import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navigation.css";
import Parts from "./Parts/Parts";
import Accessories from "./Accessories/Accessories";
import Clothing from "./Clothing/Clothing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllNavigationsAsync,
  selectAllNavigations,
} from "../../features/HomePage/homeSlice";

const Section = ({ bgColor, isSelected, onClick, children }) => (
  <span
    style={{
      backgroundColor: bgColor,
      boxShadow: isSelected
        ? "gray 0px -6px 6px -6px"
        : "0px -2px 4px 0px gray inset",
      borderRadius: "10px 10px 0px 0px",
      color: "white",
    }}
    onClick={onClick}
  >
    {children}
  </span>
);

const Navigation = ({ onClose }) => {
  const [selectedSection, setSelectedSection] = useState("parts");
  const [categoriesID, setCategoriesID] = useState("64de7823cdba27c912b2d1ce");
  const [categories, setCategories] = useState([]);
  const [categoriesByVertical, setCategoriesByVertical] = useState({
    1: [],
    2: [],
    3: [],
  });

  const handleSectionClick = (section, categoriesId) => {
    setCategoriesID(categoriesId);
    setSelectedSection(section);
  };

  const mainBackgroundColor =
    {
      parts: "var(--color-blue)",
      accessories: "var(--color-green)",
      clothing: "var(--color-peach)",
    }[selectedSection] || "var(--color-blue)";

  // Backend works------------------
  const dispatch = useDispatch();
  const navigationCategories = useSelector(selectAllNavigations);
  useEffect(() => {
    dispatch(fetchAllNavigationsAsync());
  }, [dispatch]);

  useEffect(() => {
    // Assuming navigationCategories is an array of categories fetched from the API
    const categoriesByVerticalId = navigationCategories.reduce(
      (acc, category) => {
        acc[category.verticalID].push(category);
        return acc;
      },
      { 1: [], 2: [], 3: [] }
    );

    setCategoriesByVertical(categoriesByVerticalId);
  }, [navigationCategories]);

  // console.log(categoriesByVertical[1]);

  // useEffect(() => {
  //   axios
  //     .get("https://cyclecircle.onrender.com/api/v1/categories")
  //     .then((res) => {
  //       setCategories(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const getBackgroundColor = (catName) =>
    ({
      parts: "var(--color-blue)",
      accessories: "var(--color-green)",
      clothing: "var(--color-peach)",
    }[catName] || "var(--color-primary)");

  return (
    <div className="navigationContainer">
      <div className="sections">
        <Section
          bgColor={getBackgroundColor("parts")}
          isSelected={selectedSection === "parts"}
          onClick={() => handleSectionClick("parts")}
        >
          Parts
        </Section>
        <Section
          bgColor={getBackgroundColor("accessories")}
          isSelected={selectedSection === "accessories"}
          onClick={() => handleSectionClick("accessories")}
        >
          Accessories(A)
        </Section>
        <Section
          bgColor={getBackgroundColor("clothing")}
          isSelected={selectedSection === "clothing"}
          onClick={() => handleSectionClick("clothing")}
        >
          Accessories(B)
        </Section>
      </div>
      <div
        className="main"
        style={{
          backgroundColor: mainBackgroundColor,
          borderRadius: "0 10px 10px 10px",
        }}
      >
        {selectedSection === "parts" && (
          <Parts
            categories={categoriesByVertical[1]}
            categoriesID={categoriesID}
            onClose={onClose}
          />
        )}
        {selectedSection === "accessories" && (
          <Accessories
            categories={categoriesByVertical[2]}
            categoriesID={categoriesID}
            onClose={onClose}
          />
        )}
        {selectedSection === "clothing" && (
          <Clothing
            categories={categoriesByVertical[3]}
            categoriesID={categoriesID}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
