import React from "react";
import Navbar from "../components/Navbar";
import "../css/home.css";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import banner from "../assets/images/banner.jpg";
const Home = () => {
  const products = useSelector((store) => store.products.products);
  return (
    <div className="home-container">
      <Navbar />
      <img src={banner} alt="" className="banner" />
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
