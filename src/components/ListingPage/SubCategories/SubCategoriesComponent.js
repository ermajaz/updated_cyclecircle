import React, { useState } from "react";
import "./SubCategoriesComponent.css";
import { useDispatch } from "react-redux";
import { fetchAllSubCategoryProductsAsync,fetchAllCategoryProductsAsync } from "../../../features/listingPage/listingPageSlice";
import { setBreadcrumb } from "../../../store/slices/breadCrumbsSlice";

function SubCategoriesComponent({ categoryName, CategoryID, subCategories }) {
  const dispatch = useDispatch();
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleApplyClick = (subCategoryID, subCategoryName) => {
    // Toggle the selected subcategory
    setSelectedSubcategory(
      (prevSelected) => (prevSelected === subCategoryID ? null : subCategoryID)
    );
      if(subCategoryID !== null){
        dispatch(fetchAllSubCategoryProductsAsync(subCategoryID));
      }
      else{
        dispatch(fetchAllCategoryProductsAsync(CategoryID));
      }

    // Set subcategory in breadcrumb
    dispatch(
      setBreadcrumb({
        categoryId: CategoryID,
        CategoryID:CategoryID,
        category: categoryName,
        subCategoryID:subCategoryID,
        subCategory: subCategoryID && subCategoryName,
        productName: "",
        ProductID:null,
      })
    );
  };

  const formattedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();

  return (
    <div className="subCategories-component-main-container">
      <h2>{formattedCategoryName}</h2>
      <div className="subCategories-component-container">
        <h4>SubCategories:</h4>
        <div className="subCategories-component-div">
          {subCategories.map((item) => (
            <div
              className={`subCategories-component-item-container ${
                selectedSubcategory === item.sc_id ? "selected" : ""
              }`}
              key={item.sc_id}
              onClick={() => handleApplyClick(selectedSubcategory === item.sc_id ? null:item.sc_id, item.SubcategorieName)}
            >
              <img
                src={`https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_SUBCATEGORY_IMAGE/${item.image}`}
                alt="sub-cat-logo"
              />
              <span>{item.SubcategorieName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubCategoriesComponent;
