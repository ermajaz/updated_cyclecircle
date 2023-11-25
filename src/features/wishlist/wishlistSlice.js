import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllWishlists } from "./wishlistAPI";

const initialState = {
  wishlists: [],
};

export const fetchAllWishlistsAsync = createAsyncThunk(
  "wishlist/fetchAllWishlists",
  async () => {
    const response = await fetchAllWishlists();
    return response.data;
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWishlistsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllWishlistsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.wishlists = action.payload;
      });
  },
});

export const selectAllWishlists = (state) => state.wishlist.wishlists;

export default wishlistSlice.reducer;
