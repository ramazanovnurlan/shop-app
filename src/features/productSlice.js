import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductsAsync = createAsyncThunk(
  "product/getAllProductsAsync",
  async () => {
    return await axios
      .get("http://localhost:3001/products")
      .then((res) => res.data);
  }
);

export const getProductAsync = createAsyncThunk(
  "product/getProductAsync",
  async (id) => {
    return await axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => res.data);
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    productCount: 0,
    product: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //get products
    [getAllProductsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllProductsAsync.fulfilled]: (state, action) => {
      state.productList = action.payload;
      state.productCount = action.payload.length;
      state.isLoading = false;
    },
    [getAllProductsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    //get product
    [getProductAsync.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
