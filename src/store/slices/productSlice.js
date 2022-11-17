import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      category: "mobile",
      name: "MI 10 Prime",
      img: "https://m.media-amazon.com/images/I/31z9ceRw78L._AC_SY400_.jpg",
    },

    {
      id: 2,
      category: "mobile",
      name: "One Plus",
      img: "https://m.media-amazon.com/images/I/41mDAtPMDKL._AC_SY400_.jpg",
    },

    {
      id: 3,
      category: "mobile",
      name: "Samsung M-13",
      img: "https://m.media-amazon.com/images/I/41Vj+8XWIQL._AC_SY400_.jpg",
    },

    {
      id: 4,
      category: "home-decoration",
      name: "Home Keychain Holder",
      img: "https://m.media-amazon.com/images/I/61l+VTEbEmL._AC_SY400_.jpg",
    },

    {
      id: 5,
      category: "home-decoration",
      name: "Hanging Ceiling Decorative Chandelier",
      img: "https://m.media-amazon.com/images/I/31Kk2yy1x5L._AC_SY400_.jpg",
    },

    {
      id: 6,
      category: "home-decoration",
      name: "Pots Flower Vases",
      img: "https://m.media-amazon.com/images/I/615NY3QlbiL._AC_SY400_.jpg",
    },

    {
      id: 7,
      category: "kitchen-utensils",
      name: "Hawkins Black Pressure Cooker",
      img: "https://images-eu.ssl-images-amazon.com/images/I/41CZRQomETL._AC_SX368_.jpg",
    },

    {
      id: 8,
      category: "kitchen-utensils",
      name: "Prestige Tri Ply Honeycomb Tawa",
      img: "https://images-eu.ssl-images-amazon.com/images/I/41DVtLr3JGL._AC_SX368_.jpg",
    },

    {
      id: 9,
      category: "kitchen-appliance",
      name: "Butterfly Jet Elite Mixer Grinder",
      img: "https://m.media-amazon.com/images/I/81aALsqzUlL._AC_UL480_FMwebp_QL65_.jpg",
    },

    {
      id: 10,
      category: "shoes",
      name: "Adidas Men's Axelate Walking Shoe",
      img: "https://m.media-amazon.com/images/I/61LxOcfwb2L._AC_UL480_FMwebp_QL65_.jpg",
    },

    {
      id: 11,
      category: "shoes",
      name: "Adidas Men's Orion Running Shoe",
      img: "https://m.media-amazon.com/images/I/81SX2WeKnUL._AC_UL480_FMwebp_QL65_.jpg",
    },

    {
      id: 12,
      category: "shoes",
      name: "Adidas Men's Essentials VS Pace Shoe",
      img: "https://m.media-amazon.com/images/I/810dq3zlALL._AC_UL480_FMwebp_QL65_.jpg",
    },

    {
      id: 13,
      category: "Laptop",
      name: "Acer Extensa 15-EX215-54 ",
      img: "https://m.media-amazon.com/images/I/51g12kaYslL._AC_UL480_QL65_.jpg",
    },

    {
      id: 14,
      category: "Laptop",
      name: "Lenovo IdeaPad Slim-82R10049IN",
      img: "https://m.media-amazon.com/images/I/71C24zZvAjL._AC_UL480_QL65_.jpg",
    },

    {
      id: 15,
      category: "Laptop",
      name: "HP 15s-fq5111TU",
      img: "https://m.media-amazon.com/images/I/91+6YECnK3L._AC_UL480_QL65_.jpg",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
});

export default productsSlice.reducer;
