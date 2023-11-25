// mobileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const mobileSlice = createSlice({
  name: 'mobile',
  initialState: false,
  reducers: {
    setMobileView: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMobileView } = mobileSlice.actions;
export const selectMobileView = (state) => state.mobile;

export default mobileSlice.reducer;
