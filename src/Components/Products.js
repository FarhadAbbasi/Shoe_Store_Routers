import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import data from "./Data";
import './Products.css';


function Products() {
  return (
    <div>
      <h1>Shoe Store </h1>
      <Outlet />
    </div>
  );
}

export default Products;


export function ProductList() {
  return (
    <container className="container">
      <ul>
        {
          Object.entries(data).map(([slug, { name, price, image }]) => (
            <li key={slug}>
              <Link to={`/products/${slug}`}>
                <div className="image"> <img src={image} at={name} ></img> </div>
              </Link>

              <div className="info">
                <div className="name">
                  <h3> {name} </h3>
                  <p> Premium Shoe for your dream adventure</p>
                </div>
                <button className="delete" > ${price} </button>
              </div>
            </li>
          ))
        }
      </ul>
    </container>
  )
}

export function Shoe() {
  const { slug } = useParams();
  const Shoe = data[slug];

  if (!Shoe) {
    return <h3> {slug} Not Found! </h3>
  }

  return (
    <div className="shoe-container">

      <div className="shoe-info">
        <h2> {Shoe.name} Shoe! </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="delete"> $ {Shoe.price} </button>
      </div>
      <img src={Shoe.image} alt={slug} ></img>
    </div>
  )
}