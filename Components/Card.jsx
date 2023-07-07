import React from "react";
import { Shirt } from "../Components/Shirt.jsx";
import { Shoes } from "./Shoes.jsx";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";
import product from "../Database/product.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";



export const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={product.gadget1.image} alt="Card Image" />
          <div className="card-body">
            <h3 className="card-title">{product.gadget1.title}</h3>
            <p className="card-text">{product.gadget1.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget1.beforePrice}
                  </span>
                  ${product.gadget1.price}
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
              <span>{product.gadget1.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-3">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.gadget2.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget2.title}</h5>
            <p class="card-text">{product.gadget2.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget2.beforePrice}
                  </span>
                  ${product.gadget2.price}
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
              <span>{product.gadget2.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-1">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.gadget3.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget3.title}</h5>
            <p class="card-text">{product.gadget3.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget3.beforePrice}
                  </span>
                  ${product.gadget3.price}
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
              <span>{product.gadget3.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.gadget4.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget4.title}</h5>
            <p class="card-text">{product.gadget4.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget4.beforePrice}
                  </span>
                  ${product.gadget4.price}
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
          <img src={product.gadget5.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget5.title}</h5>
            <p class="card-text">{product.gadget5.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget5.beforePrice}
                  </span>
                  ${product.gadget5.price}
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
              <span>{product.gadget5.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.gadget6.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget6.title}</h5>
            <p class="card-text">{product.gadget6.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget6.beforePrice}
                  </span>
                  ${product.gadget6.price}
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
              <span>{product.gadget6.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div class="card">
          <img src={product.pants1.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants1.title}</h5>
            <p class="card-text">{product.pants1.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants1.beforePrice}
                  </span>
                  ${product.pants1.price}
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
              <span>{product.pants1.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.pants2.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants2.title}</h5>
            <p class="card-text">{product.pants2.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants2.beforePrice}
                  </span>
                  ${product.pants2.price}
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
              <span>{product.pants2.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.pants3.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants3.title}</h5>
            <p class="card-text">{product.pants3.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants3.beforePrice}
                  </span>
                  ${product.pants3.price}
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
              <span>{product.pants3.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.pants4.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants4.title}</h5>
            <p class="card-text">{product.pants4.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants4.beforePrice}
                  </span>
                  ${product.pants4.price}
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
              <span>{product.pants4.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div class="card">
          <img src={product.pants5.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants5.title}</h5>
            <p class="card-text">{product.pants5.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants5.beforePrice}
                  </span>
                  ${product.pants5.price}
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
              <span>{product.pants5.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.pants6.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants6.title}</h5>
            <p class="card-text">{product.pants6.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants6.beforePrice}
                  </span>
                  ${product.pants6.price}
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
              <span>{product.pants7.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.pants7.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants7.title}</h5>
            <p class="card-text">{product.pants7.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants7.beforePrice}
                  </span>
                  ${product.pants7.price}
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
              <span>{product.pants7.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.pants7.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title text-center">{product.pants7.title}</h5>
            <p class="card-text">{product.pants7.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.pants7.beforePrice}
                  </span>
                  ${product.pants7.price}
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
              <span>{product.pants7.rating} reviews</span>)
            </div>
            <button type="button" classN="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <Shirt />
      <Shoes />
    </>
  );
};
