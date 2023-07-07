import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <h4>Payment</h4>
            <img className="payment-logo" src="./images/dragonpaylogo.png" />
            <img className="payment-logo" src="./images/bpilogo.png" />
            <img className="payment-logo" src="./images/bdologo.png" />
            <img className="payment-logo" src="./images/gcashlogo.png" />
            <img className="payment-logo" src="./images/mayalogo.png" />
          </div>
        </div>
        <div className="footer-content">
          <h4>FOLLOW US</h4>
          <span><BsFacebook className="follow-logo" /> Facebook</span>
          <span><BsGithub className="follow-logo" /> Github</span>
          <span><BsLinkedin className="follow-logo" />LinkedIn</span>
          <span><MdEmail className="follow-logo" />Gmail</span>
        </div>
      </div>

      <hr />
      <p>&copy; 2023 Josuel DCM. All Rights Reserved</p>
    </footer>
  );
};
