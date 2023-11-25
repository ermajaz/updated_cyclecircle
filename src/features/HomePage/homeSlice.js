import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  fetchAllHotlists,
  fetchAllBanners,
  fetchAllSpotlights,
  fetchAllInclusiveBrands,
  fetchAllOurBrands,
  fetchAllNavigations,
  fetchAllPromises,
} from "./homeAPI";

const initialState = {
  hotlists: [],
  banners: [],
  promises: [],
  spotlights: [],
  ourBrands: [],
  inclusiveBrands: [],
  navigations: [],
  status: "idle",
};

export const fetchAllNavigationsAsync = createAsyncThunk(
  "navigation/fetchAllNavigations",
  async () => {
    const response = await fetchAllNavigations();
    return response.data;
  }
);
export const fetchAllHotlistsAsync = createAsyncThunk(
  "hotlist/fetchAllHotlists",
  async () => {
    const response = await fetchAllHotlists();
    return response.data;
  }
);

export const fetchAllPromisesAsync = createAsyncThunk(
  "promise/fetchAllPromises",
  async () => {
    const response = await fetchAllBanners();
    return response.data;
  }
);
export const fetchAllBannersAsync = createAsyncThunk(
  "banner/fetchAllBanners",
  async () => {
    const response = await fetchAllBanners();
    return response.data;
  }
);

export const fetchAllSpotlightsAsync = createAsyncThunk(
  "spotlight/fetchAllSpotlights",
  async () => {
    const response = await fetchAllSpotlights();
    return response.data;
  }
);
export const fetchAllOurBrandsAsync = createAsyncThunk(
  "ourBrand/fetchAllOurBrands",
  async () => {
    const response = await fetchAllOurBrands();
    return response.data;
  }
);
export const fetchAllInclusiveBrandsAsync = createAsyncThunk(
  "inclusiveBrand/fetchAllInclusiveBrands",
  async () => {
    const response = await fetchAllInclusiveBrands();
    return response.data;
  }
);

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNavigationsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllNavigationsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.navigations = action.payload;
      });
  },
});
export const hotlistSlice = createSlice({
  name: "hotlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllHotlistsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllHotlistsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotlists = action.payload;
      });
  },
});

export const promiseSlice = createSlice({
  name: "promise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPromisesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPromisesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.promises = action.payload;
      });
  },
});
export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBannersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBannersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.banners = action.payload;
      });
  },
});

export const spotlightSlice = createSlice({
  name: "spotlight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSpotlightsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSpotlightsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.spotlights = action.payload;
      });
  },
});
export const ourBrandSlice = createSlice({
  name: "ourBrand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOurBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllOurBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.ourBrands = action.payload;
      });
  },
});
export const inclusiveBrandSlice = createSlice({
  name: "inclusiveBrand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllInclusiveBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllInclusiveBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.inclusiveBrands = action.payload;
      });
  },
});

// const rootReducer = combineReducers({
//   navigation: navigationSlice.reducer,
//   hotlist: hotlistSlice.reducer,
//   banner: bannerSlice.reducer,
//   promise: promiseSlice.reducer,
//   spotlight: spotlightSlice.reducer,
//   ourBrand: ourBrandSlice.reducer,
//   inclusiveBrand: inclusiveBrandSlice.reducer,
// });

// export {
// fetchAllNavigationsAsync,
//   fetchAllHotlistsAsync,
//   fetchAllBannersAsync,
//   fetchAllSpotlightsAsync,
//   fetchAllOurBrandsAsync,
//   fetchAllInclusiveBrandsAsync
// };

export const selectAllNavigations = (state) => state.navigation.navigations;
export const selectAllHostlists = (state) => state.hotlist.hotlists;
export const selectAllBanners = (state) => state.banner.banners;
export const selectAllPromises = (state) => state.promise.promises;
export const selectAllSpotlights = (state) => state.spotlight.spotlights;
export const selectAllOurBrands = (state) => state.ourBrand.ourBrands;
export const selectAllInclusiveBrands = (state) =>
  state.inclusiveBrand.inclusiveBrands;

// export default rootReducer;
