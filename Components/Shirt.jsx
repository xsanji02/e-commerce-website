import React from "react";
import product from "../Database/product";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";


export const Shirt = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={product.shirt1.image} alt="Card Image" />
        <div className="card-body">
          <h3 className="card-title">{product.shirt1.title}</h3>
          <p className="card-text">{product.shirt1.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shirt1.beforePrice}</span>$
                {product.shirt1.price}
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
            <span>{product.shirt1.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-3">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shirt2.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shirt2.title}</h5>
          <p class="card-text">{product.shirt2.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shirt2.beforePrice}</span>$
                {product.shirt2.price}
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
            <span>{product.shirt2.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-1">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shirt3.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shirt3.title}</h5>
          <p class="card-text">{product.shirt3.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shirt3.beforePrice}</span>$
                {product.shirt3.price}
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
            <span>{product.shirt3.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shirt4.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shirt4.title}</h5>
          <p class="card-text">{product.shirt4.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shirt4.beforePrice}</span>$
                {product.shirt4.price}
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
            <span>{product.shirt4.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shirt5.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shirt5.title}</h5>
          <p class="card-text">{product.shirt5.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">
                   ${product.shirt5.beforePrice}
                </span>
                ${product.shirt5.price}
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
            <span>{product.shirt5.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shirt6.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shirt6.title}</h5>
          <p class="card-text">{product.shirt6.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shirt6.beforePrice}</span>$
                {product.shirt6.price}
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
            <span>{product.shirt6.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-2">
            BUY NOW
          </button>
        </div>
      </div>
      <div class="card">
        <img src={product.shirt7.image} class="card-image" alt="images" />
        <div class="card-body">
          <h5 class="card-title">{product.shirt7.title}</h5>
          <p class="card-text">{product.shirt7.description}</p>
          <div className="card-section">
            <div className="price-div">
              <p class="card-text text-warning fw-bold ">
                <span class="before-price">${product.shirt7.beforePrice}</span>$
                {product.shirt7.price}
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
            <span>{product.shirt7.rating} reviews</span>)
          </div>
          <button type="button" class="btn btn-warning mt-1">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
