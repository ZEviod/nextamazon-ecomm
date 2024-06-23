import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface StoreState {
  productData: ProductType[];
  userInfo: null | string;
  orderData: ProductType[];
  favoriteData: ProductType[];
}

const initialState: StoreState = {
  productData: [],
  userInfo: null,
  orderData: [],
  favoriteData: [],
};

export const proSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductType) => item?._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductType) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductType) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: ProductType) => item._id === action.payload._id
      );
      if (existingProduct) {
        state.favoriteData = state.favoriteData.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetFavorite: (state) => {
      state.favoriteData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    addOrder: (state, action) => {
      const existingOrder = state.orderData.find(
        (item: ProductType) => item._id === action.payload._id
      );
      if (existingOrder) {
        state.orderData.push(action.payload);
      } else {
        state.orderData = action.payload;
      }
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  deleteUser,
  addOrder,
  resetOrder,
  addToFavorite,
  deleteFavorite,
  resetFavorite,
} = proSlice.actions;
export default proSlice.reducer;
