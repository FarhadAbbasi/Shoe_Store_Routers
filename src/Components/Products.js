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
    <container className= "container">
      <ul>
        {
          Object.entries(data).map(([slug, { name, image }]) => (
            <li key={slug}>
              <Link to={`/products/${slug}`}>              
              <div className="image"> <img src={image} at={name} ></img> </div> 
              </Link>

              <div className="name">  
                <h3> {name} </h3> 
                <p> Premium Shoe for your dream adventure</p>
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
    <div>
      <h3> Shoe {slug} ! </h3>
      <img src={Shoe.image} alt={slug} ></img>
    </div>
  )
}