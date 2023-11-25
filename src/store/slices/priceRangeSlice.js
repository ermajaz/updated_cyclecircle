import { createSlice } from '@reduxjs/toolkit';

export const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState: {
    minValue: 500,
    maxValue: 7000,
  },
  reducers: {
    setMinValue: (state, action) => {
      state.minValue = action.payload;
    },
    setMaxValue: (state, action) => {
      state.maxValue = action.payload;
    },
  },
});

export const { setMinValue, setMaxValue } = priceRangeSlice.actions;

export default priceRangeSlice.reducer;
