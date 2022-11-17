import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReduer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReduer,
  },
});
