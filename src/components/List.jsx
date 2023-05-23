import React from "react";
import products from "../data/products.json";
import Product from "./Product";

export default function List() {
  console.log(products);
  return (
    <div>
      <Product />
    </div>
  );
}
