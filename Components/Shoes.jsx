import React from "react";
import product from "../Database/product";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";

export const Shoes = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={product.shoes1.image} alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{product.shoes1.title}</h5>
          <p className="card-text">{product.shoes1.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shoes1.beforePrice}</span>$
                {product.shoes1.price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{product.shoes1.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-3">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shoes2.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shoes2.title}</h5>
          <p class="card-text">{product.shoes2.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shoes2.beforePrice}</span>$
                {product.shoes2.price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{product.shoes2.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-1">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shoes3.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shoes3.title}</h5>
          <p class="card-text">{product.shoes3.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shoes3.beforePrice}</span>$
                {product.shoes3.price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{product.shoes3.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shoes4.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shoes4.title}</h5>
          <p class="card-text">{product.shoes4.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shoes4.beforePrice}</span>$
                {product.shoes4.price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{product.gadget4.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shoes5.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shoes5.title}</h5>
          <p class="card-text">{product.shoes5.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shoes5.beforePrice}</span>$
                {product.shoes5.price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{product.shoes5.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shoes6.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shoes6.title}</h5>
          <p class="card-text">{product.shoes6.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shoes6.beforePrice}</span>$
                {product.shoes6.price}
              </p>
            </div>
            <div className="icon-div">
              <FaShoppingBag className="button-cart" />
            </div>
          </div>
          <div className="ratings">
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />
            <BiSolidStar className="start-icon" />(
            <span>{product.shoes6.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
