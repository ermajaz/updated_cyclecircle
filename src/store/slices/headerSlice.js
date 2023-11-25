// headerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  isOverlayVisible: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleOverlay: (state) => {
      state.isOverlayVisible = !state.isOverlayVisible;
    },
  },
});

export const { setSearchTerm, toggleOverlay } = headerSlice.actions;
export const selectSearchTerm = (state) => state.header.searchTerm;
export const selectIsOverlayVisible = (state) => state.header.isOverlayVisible;

export default headerSlice.reducer;
