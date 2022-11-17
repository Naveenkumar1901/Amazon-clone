import React from "react";
import "../css/navbar.css";
import logo from "../assets/images/Amazon-Logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const user = JSON.parse(sessionStorage.getItem("currentuser"));

  return (
    <div className="nav-container">
      <div className="navbar-left">
        <img
          src={logo}
          className="page-logo"
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
      <div className="navbar-center">
        <input className="search" type="text" />
        <div className="search-icon">
          <IoSearchSharp />
        </div>
      </div>
      <div className="navbar-right">
        <h1 className="account-status">
          <p className="hello">Hello,</p>
          {user?.name}
        </h1>
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <h1 className="count">{cartItems?.length || 0}</h1>
          <CgShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
