// hotDealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carouselIndex: 0,
};

const hotDealsSlice = createSlice({
  name: 'hotDeals',
  initialState,
  reducers: {
    setCarouselIndex: (state, action) => {
      state.carouselIndex = action.payload;
    },
  },
});

export const { setCarouselIndex } = hotDealsSlice.actions;
export const selectHotDeals = (state) => state.hotDeals;

export default hotDealsSlice.reducer;
