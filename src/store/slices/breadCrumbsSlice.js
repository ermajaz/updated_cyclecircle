import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavOpen: false,
  vertical: "",
  verticalID:null,
  category: "",
  categoryID:null,
  subCategory: "",
  subCategoryID:null,
  productName: "",
  productNameID:null,
};

const getCategoryName = (verticalID) => {
  if (verticalID >= 1 && verticalID <= 7) {
    return "PARTS";
  } else if (verticalID >= 8 && verticalID <= 13) {
    return "ACCESSORIES(A)";
  } else if (verticalID >= 14 || verticalID <= 15) {
    return "ACCESSORIES(B)";
  } else {
    return "";
  }
};
const getVerticatID = (verticalID) => {
  if (verticalID >= 1 && verticalID <= 7) {
    return 1;
  } else if (verticalID >= 8 && verticalID <= 13) {
    return 2;
  } else if (verticalID >= 14 || verticalID <= 15) {
    return 3;
  } else {
    return null;
  }
};

const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    setBreadcrumb: (state, action) => {
      const {verticalName,verticalID,CategoryID, category,SubCategoryID, subCategory, productName,ProductID } = action.payload;
      state.verticalID = getVerticatID(verticalID);
      state.vertical = verticalName?verticalName: getCategoryName(verticalID);
      state.categoryID = CategoryID ? CategoryID:verticalID;
      state.category = category || "";
      state.subCategoryID = SubCategoryID;
      state.subCategory = subCategory || "";
      state.productNameID = ProductID;
      state.productName = productName || "";
    },
  },
});

export const { toggleNavigation, setBreadcrumb } = breadcrumbsSlice.actions;
export const selectIsNavOpen = (state) => state.breadcrumbs.isNavOpen;
export const selectBreadcrumbs = (state) => state.breadcrumbs;

export default breadcrumbsSlice.reducer;
