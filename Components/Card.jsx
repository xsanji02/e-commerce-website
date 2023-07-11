import React from "react";
import { Gadgets } from "../Components/Gadgets.jsx";
import { Shirt } from "../Components/Shirt.jsx";
import { Shoes } from "../Components/Shoes.jsx";
import { Pants } from "../Components/Pants.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export const Card = () => {
  return (
    <>
      <div className="navigation">
        <ul className="navigation-content ">
          <Link to="/all">
            <li>All</li>
          </Link>
          <Link to="/gadgets">
            <li>Gadgets</li>
          </Link>
          <Link to="/pants">
            <li>Pants</li>
          </Link>
          <Link to="/shirt">
            <li>Shirts</li>
          </Link>
          <Link to="/shoes">
            <li>Shoes</li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </>
  );
};
