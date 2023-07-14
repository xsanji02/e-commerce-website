import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import "./Nav.css";

export const Nav = ({cartCount}) => {



  return (
    <nav className="nav-container bg-body-secondary position-fixed z-3">
      <div className="nav-content">
        <a href="#">
          <img className="nav-logo" src="./images/logo.png" />
        </a>
        <p class="text-warning fs-4 fw-bold mt-3">Online Shopping</p>
        <form class="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "40rem" }}
          />
          <button class="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
        <div className="cart-logo">
          
            

          <span class="badge bg-transparent text-dark me-1"><BsFillCartFill className="account" style={{width: "1.8rem", height: "1.9rem"}}  />{cartCount}</span>
          <IoPersonCircleSharp className="account ms-4 mt-1 me-2" style={{width: "2.1rem", height: "2rem"}} />
        </div>
      </div>
    </nav>
  );
};
