/* eslint-disable no-undef */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartProduct: <any>[],
  wishListProduct: <any>[],
  openCart: false,
  loading: false,
  error: "",
};

export const fetchCartData = createAsyncThunk(
  "cart/fetchData",
  async (cartId: any, thunkAPI: any) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}cart/fetch/${cartId}`,
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
          },
        }
      );
      return response.data?.data?.products;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchWishListData = createAsyncThunk(
  "whishlist/fetchData",
  async (cartId: any, thunkAPI: any) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}whishlist/fetch/${cartId}`,
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
          },
        }
      );
      return response.data?.data?.whishlist_products_id;
    } catch (error) {
      throw error;
    }
  }
);

export const postCartData = createAsyncThunk(
  "cart/postData",
  async (payload: any) => {
    const { userid, quantity, productid, token } = payload;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}cart/create`,
        {
          userid,
          quantity,
          productid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (payload: any, thunkAPI: any) => {
    try {
      const { productid, quantity, userid } = payload;
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}cart/update`,
        {
          productid,
          quantity,
          userid,
        },
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const removeWishlistItem = createAsyncThunk(
  "cart/removeWishlistItem",
  async (payload: any, thunkAPI: any) => {
    try {
      const { productid, userid } = payload;
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}whishlist/remove`,
        {
          productid,
          userid,
        },
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createWishlistItem = createAsyncThunk(
  "wishlist/createItem",
  async ({ userid, productid, token }: any) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}whishlist/create`,
        {
          userid,
          productid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity(state, action) {
      const { productId } = action.payload;
      const item = state.cartProduct.find(
        (item: any) => item.product.id === productId
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const { productId } = action.payload;
      const item = state.cartProduct.find(
        (item: any) => item.product.id === productId
      );
      if (item) {
        item.quantity--;
      }
    },
    deleteItem(state, action) {
      const { productId } = action.payload;
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (item: any) => item?.product?.id !== productId
        ),
      };
    },
    deleteItemW(state, action) {
      const { productId } = action.payload;
      return {
        ...state,
        wishListProduct: state.wishListProduct.filter(
          (item: any) => item?.id !== productId
        ),
      };
    },
    addLocalCartProduct: (state, action) => {
      state.cartProduct = [...state?.cartProduct, action.payload];
    },
    addLocalCartProductW: (state, action) => {
      state.wishListProduct = [...state?.wishListProduct, action.payload];
    },
    setOpenCart: (state) => {
      state.openCart = !state.openCart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProduct = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
    builder
      .addCase(fetchWishListData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchWishListData.fulfilled, (state, action) => {
        state.loading = false;
        state.wishListProduct = action.payload;
      })
      .addCase(fetchWishListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});
// eslint-disable-next-line no-empty-pattern
export const {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  addLocalCartProduct,
  setOpenCart,
  addLocalCartProductW,
  deleteItemW,
} = cartSlice.actions;

export default cartSlice.reducer;
