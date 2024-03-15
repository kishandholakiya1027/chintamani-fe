/* eslint-disable no-undef */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cartProduct:<any>[],
    cartCount: 0,
    wishListProduct: [],
    wishListCount: 0,
    openCart:false,
    loading: false,
    error: ""
}


export const fetchCartData = createAsyncThunk(
    'cart/fetchData',
    async (cartId, thunkAPI: any) => {
      try {
        const response = await axios.get(`https://api.chintamanigems.com/api/v1/cart/fetch/${cartId}`, {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`
          }
        });
        return response.data?.data?.products;
      } catch (error) {
        throw error;
      }
    }
  );


export const postCartData = createAsyncThunk(
    'cart/postData',
    async (payload: any) => {
      const { userid, quantity, productid, token } = payload;
      
  
      try {
        const response = await axios.post('https://api.chintamanigems.com/api/v1/cart/create', {
          userid,
          quantity,
          productid,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        return response.data;
      } catch (error) {
        // Handle error
        throw error;
      }
    }
  );
  

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartProduct: () => {
            // let products = action?.payload?.products_id ||action?.payload?.products
         
            // state.cartProduct = products?.map((product: any,index:number) => {
            //     let quantity = product?.quantity || action?.payload?.quantity[index] || 1
            //     product.quantity = quantity === "undefined" || !quantity ? 1 : quantity
            //     return product
            // })
            // state.cartCount = products?.length
        },
        addLocalCartProduct: (state, action) => {
            state.cartProduct = [...state?.cartProduct, action.payload]
            state.cartCount = state?.cartProduct?.length
        },
        setOpenCart:(state)=>{
            state.openCart = !state.openCart
        },
        addWishLishProduct: (state, action) => {
            state.wishListProduct = action?.payload?.whishlist_products_id
            state.wishListCount = action?.payload?.whishlist_products_id?.length
        },
        addQuantity:()=>{
        //    let index = state?.cartProduct?.findIndex((product:any)=>product?.product?.id === action?.payload?.id||product?.id === action?.payload?.id ) 
        //    state.cartProduct[index].quantity = action?.payload?.quantity 
        }
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
      },

});
// eslint-disable-next-line no-empty-pattern
export const { addCartProduct,addLocalCartProduct,addWishLishProduct ,addQuantity,setOpenCart} = cartSlice.actions;

export default cartSlice.reducer;
