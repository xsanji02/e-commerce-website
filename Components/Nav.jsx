import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav-container bg-body-secondary">
      <div className="nav-content">
        <a href="#">
          <img className="nav-logo" src="./images/logo.png" />
        </a>
        <p class="text-warning fs-4 fw-bold mt-3">Online Shopping</p>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
        <div className="cart-logo">
          <BsFillCartFill className="account ms-3" />
          <IoPersonCircleSharp className="account ms-3" />
        </div>
      </div>
    </nav>
  );
};
