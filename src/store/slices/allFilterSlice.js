// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brands:[],
  materials:[],
  rating:0,
  minPrice:0,
  maxPrice:0,
  sortPrice:"",
  sortRating:"",
};

const allFilterSlice = createSlice({
  name: 'allFilter',
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setMaterials: (state, action) => {
      state.materials = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSortPrice: (state, action) => {
      state.sortPrice = action.payload;
    },
    setSortRating: (state, action) => {
      state.sortRating = action.payload;
    },
  },
});

export const { setBrands, setMaterials,setRating,setMinPrice,setMaxPrice,setSortPrice,setSortRating } = allFilterSlice.actions;
export const selectAllFilter = (state) => state.allFilter;

export default allFilterSlice.reducer;
