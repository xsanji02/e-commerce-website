import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";
import product from "../Database/product.js";

export const Gadgets = () => {
  return (
    <div className="pants-border">
      <div className="card-container">
        <div className="card">
          <img src={product.gadget1.image} className="card-image" alt="Card Image" />
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
        <div className="card">
          <img
            src={product.gadget3.image}
            className="card-image"
            alt="images"
          />
          <div className="card-body">
            <h5 className="card-title">{product.gadget3.title}</h5>
            <p className="card-text">{product.gadget3.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p className="card-text text-warning fw-bold ">
                  <span className="before-price">
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
      </div>
      <div className="card-container">
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
        <div class="card">
          <img src={product.gadget7.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget7.title}</h5>
            <p class="card-text">{product.gadget7.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget7.beforePrice}
                  </span>
                  ${product.gadget7.price}
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
              <span>{product.gadget7.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
        <div class="card">
          <img src={product.gadget8.image} class="card-image" alt="images" />
          <div class="card-body">
            <h5 class="card-title">{product.gadget8.title}</h5>
            <p class="card-text">{product.gadget8.description}</p>
            <div className="card-section">
              <div className="price-div">
                <p class="card-text text-warning fw-bold ">
                  <span class="before-price">
                    ${product.gadget8.beforePrice}
                  </span>
                  ${product.gadget8.price}
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
              <span>{product.gadget8.rating} reviews</span>)
            </div>
            <button type="button" class="btn btn-warning mt-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
