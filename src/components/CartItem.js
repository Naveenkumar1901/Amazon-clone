import React from "react";
import { removeFromCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img alt="" src={item.img} />
      <p>{item.name}</p>
      <button
        onClick={() => {
          dispatch(removeFromCart(item.id));
        }}
      >
        Remove From Cart
      </button>
    </div>
  );
};

export default CartItem;
