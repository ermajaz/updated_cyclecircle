import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    selectedColor: 'blue',
  },
  reducers: {
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setSelectedColor } = colorSlice.actions;

export default colorSlice.reducer;
