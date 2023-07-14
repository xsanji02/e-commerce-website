import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Card.css";

export const Card = ({
  img,
  title,
  desc,
  beforePrice,
  price,
  ratings,
  addToCart,
  modal,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} className="card-image" alt="Card Image" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{desc}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${beforePrice}</span>${price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" onClick={addToCart} />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{ratings} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-3" onClick={modal}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
