import { combineReducers } from 'redux';
import listingPageFilterReducer from '../slices/listingPageFilterSlice';
import priceRangeReducer from '../slices/priceRangeSlice';
import userReducer from '../slices/userSlice';
import headerReducer from '../slices/headerSlice';
import mobileReducer from "../slices/bannerSlice";
import hotDealsReducer from '../slices/hotDealsSlice';
import breadCrumbsReducer from '../slices/breadCrumbsSlice';
import colorReducer from "../slices/colorSlice";
import productReducer from "../../features/listingPage/listingPageSlice";
import productDetailReducer from "../../features/productDesc/productDescSlice";
import filterReducer from "../slices/allFilterSlice";
import {
  navigationSlice,
  hotlistSlice,
  bannerSlice,
  promiseSlice,
  spotlightSlice,
  ourBrandSlice,
  inclusiveBrandSlice,
} from "../../features/HomePage/homeSlice";

export const rootReducer = combineReducers({
  listingPageFilter: listingPageFilterReducer,
  priceRange: priceRangeReducer,
  user: userReducer,
  header: headerReducer,
  isMobile: mobileReducer,
  hotDeals: hotDealsReducer,
  breadcrumbs: breadCrumbsReducer,
  color:colorReducer,
  product:productReducer,
  productDetail:productDetailReducer,
  navigation: navigationSlice.reducer,
  hotlist: hotlistSlice.reducer,
  banner: bannerSlice.reducer,
  promise: promiseSlice.reducer,
  spotlight: spotlightSlice.reducer,
  ourBrand: ourBrandSlice.reducer,
  inclusiveBrand: inclusiveBrandSlice.reducer,
  allFilter:filterReducer,
});
