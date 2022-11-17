import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, data) => {
      if (!state.cartItems.find((item) => item.id === data.payload.id))
        state.cartItems = state.cartItems.concat(data.payload);
    },
    removeFromCart: (state, data) => {
      state.cartItems = state.cartItems.filter((product) => {
        return product.id !== data.payload;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
