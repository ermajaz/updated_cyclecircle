// listingPageFilterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingMode: '',
  priceRange: '',
  ratings: '',
};

const listingPageFilterSlice = createSlice({
  name: 'listingPageFilter',
  initialState,
  reducers: {
    setShippingMode: (state, action) => {
      state.shippingMode = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRatings: (state, action) => {
      state.ratings = action.payload;
    },
    clearAllFilters: (state) => {
      return initialState;
    },
  },
});

export const { setShippingMode, setPriceRange, setRatings, clearAllFilters } = listingPageFilterSlice.actions;
export const selectListingPageFilter = (state) => state.listingPageFilter;

export default listingPageFilterSlice.reducer;
