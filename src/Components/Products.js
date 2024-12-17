import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
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
        Object.entries(data).map(([slug, { name, image }]) => (
          <li key={slug}>
            <Link to={`/products/${slug}`}>
              <h3> {name} </h3>
              <img src={image} alt={name} ></img>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export function Shoe() {
  const {slug} = useParams();
  const Shoe = data [slug] ;

  if (!Shoe) {
    return <h3> {slug} Not Found! </h3>
  }

  return (
  <div>
    <h3> Shoe {slug} ! </h3>
    <img src={Shoe.image} alt={slug} ></img>
  </div>
  ) 
}