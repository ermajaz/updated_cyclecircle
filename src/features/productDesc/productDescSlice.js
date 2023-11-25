import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPrductDetails } from "./productDescAPI";

const initialState = {
  productDetails: [],
  status: 'idle',
  selectedProd_ID:null,
};

export const fetchProductDetailsAsync = createAsyncThunk(
  "productDetail/fetchProductDetails",
  async (prod_ID) => {
    const response = await fetchPrductDetails(prod_ID);
    // console.log("data",response.data);
    return response.data;
  }
);

export const setSelectedProd_ID = (prod_ID) => (dispatch) => {
  dispatch(productDetailSlice.actions.setSelectedProd_ID(prod_ID));
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setSelectedProd_ID: (state, action) => {
      state.selectedProd_ID = action.payload;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.productDetails = action.payload;
      });
  },
});

export const selectProductDetails = (state) => state.productDetail.productDetails;

export default productDetailSlice.reducer;
