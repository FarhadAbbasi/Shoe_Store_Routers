import React from "react";
import { Outlet } from "react-router-dom";
import data from "./Data";


function Products() {
  return (
    <div>
      <h2>Launch </h2>
      <Outlet />
    </div>
  );
}

export default Products;


export function ProductList() {
  return (
    <ul>
      {
        Object.entries(data).map( ( [slug, {name, image} ] ) => (
          <li key={slug}>
            <h3> {name} </h3>
            <img src={image} alt= {name} ></img>

          </li>
        ))
      }
    </ul>
  )
}
