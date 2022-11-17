import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../css/cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="cart-container">
      <Navbar />
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
