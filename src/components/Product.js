import React from "react";
import { addToCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="each-product">
      <img
        src={product.img}
        alt=""
        className="product-image"
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <p className="product-name">{product.name}</p>
      <button
        className="add-to-cart"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
