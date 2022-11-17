import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductView = () => {
  const [currentProduct, setCurrentProduct] = useState();
  const { id } = useParams();
  const products = useSelector((store) => store.products.products);

  useEffect(() => {
    let currentProduct = products?.find((product) => product.id === id * 1);
    setCurrentProduct(currentProduct);
  }, [id, products]);
  return (
    <div>
      <Navbar />
      <img src={currentProduct?.img} alt="productImg" />
      <h1>{currentProduct?.name}</h1>
    </div>
  );
};

export default ProductView;
