import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCategoryProducts,
  fetchAllSubCategoryProducts,
  fetchAllSubCategories,
  fetchAllBrands,
  fetchAllMaterials
} from "./listingPageAPI";

const initialState = {
  products: [],
  subCategories: [],
  brands:[],
  materials:[],
  status: "idle",
  selectedCategoryID: null,
};

export const fetchAllCategoryProductsAsync = createAsyncThunk(
  "product/fetchAllCategoryProducts",
  async (CategoryID) => {
    const response = await fetchAllCategoryProducts(CategoryID);
    return response.data;
  }
);
export const fetchAllSubCategoryProductsAsync = createAsyncThunk(
  "product/fetchAllSubCategoryProducts",
  async (SubCategoryID) => {
    const response = await fetchAllSubCategoryProducts(SubCategoryID);
    // console.log(response.data);
    return response.data;
  }
);
export const fetchAllSubCategoriesAsync = createAsyncThunk(
  "categories/fetchAllSubCategories",
  async (CategoryID) => {
    const response = await fetchAllSubCategories(CategoryID);
    return response.data;
  }
);
export const fetchAllBrandsAsync = createAsyncThunk(
  "brand/fetchAllBrands",
  async () => {
    const response = await fetchAllBrands();
    return response.data;
  }
);
export const fetchAllMaterialsAsync = createAsyncThunk(
  "material/fetchAllMaterials",
  async () => {
    const response = await fetchAllMaterials();
    return response.data;
  }
);

export const setSelectedCategoryID = (CategoryID) => (dispatch) => {
  dispatch(productSlice.actions.setSelectedCategoryID(CategoryID));
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedCategoryID: (state, action) => {
      state.selectedCategoryID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoryProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCategoryProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllSubCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSubCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.subCategories = action.payload;
      })
      .addCase(fetchAllSubCategoryProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSubCategoryProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchAllMaterialsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMaterialsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.materials = action.payload;
      });
  },
});
export const { increment } = productSlice.actions;

export const selectAllCategoryProducts = (state) => state.product.products;
export const selectAllSubCategories = (state) => state.product.subCategories;
export const selectAllBrands = (state) => state.product.brands;
export const selectAllMaterials = (state) => state.product.materials;

export default productSlice.reducer;
