/* eslint-disable no-undef */
import { apiPath } from "@/lib/api-path";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allCategory: [],
  shape: [],
  loading: false,
  error: "",
  category: [],
  filterProduct: {},
};

export const fetchAllCategoryData = createAsyncThunk(
  "allCategory/fetch",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}${apiPath?.categories?.all}?page=1&pageSize=100`
      );
      return response.data?.data;
    } catch (error) {
      throw new Error("Failed to fetch all category data");
    }
  }
);

export const fetchShapeData = createAsyncThunk("shape/fetch", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}${apiPath?.shape?.all}`
    );
    return response.data?.data?.Shapedata;
  } catch (error) {
    throw new Error("Failed to fetch shape data");
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setFilterProduct: (state, action) => {
      state.filterProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoryData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllCategoryData.fulfilled, (state, action) => {
        state.loading = false;
        state.allCategory = action.payload;
      })
      .addCase(fetchAllCategoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
    builder
      .addCase(fetchShapeData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchShapeData.fulfilled, (state, action) => {
        state.loading = false;
        state.shape = action.payload;
      })
      .addCase(fetchShapeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});
// eslint-disable-next-line no-empty-pattern
export const { setCategory, setFilterProduct } = categorySlice.actions;

export default categorySlice.reducer;
