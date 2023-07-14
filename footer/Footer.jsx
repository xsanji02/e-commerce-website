import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="payment-div">
            <h4>Payment</h4>
            <img className="payment-logo" src="./images/gcashlogo.png" />
            <img className="payment-logo" src="./images/bpilogo.png" />
            <img className="payment-logo" src="./images/bdologo.png" />
            <img className="payment-logo" src="./images/mayalogo.png" />
            <img className="payment-logo" src="./images/dragonpaylogo.png" />
          </div>
        </div>
        <div className="footer-content">
          <h4>FOLLOW ME HERE</h4>
          <span>
            <a href="https://www.facebook.com/josueldcm" target="_blank">
              <BsFacebook className="follow-logo" />
            </a>{" "}
            Facebook
          </span>
          <span>
            <a href="https://github.com/xsanji02" target="_blank">
              <BsGithub className="follow-logo" />
            </a>{" "}
            Github
          </span>
          <span>
            <a href="https://www.linkedin.com/in/josuel-motio-72a2b4231/" target="_blank">
              <BsLinkedin className="follow-logo" />
            </a>
            LinkedIn
          </span>
          <span>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKHRMDklXtSXZKCnQBTJrXLwhHHcXWFhRmHpWmjQcdZlQhPQKsnBzZWVRfGtZmSsVdtcvBB"
              target="_blank"
            >
              <MdEmail className="follow-logo" />
            </a>
            Gmail
          </span>
        </div>
      </div>

      <p>&copy;2023 JDCM.Dev All Rights Reserved</p>
    </footer>
  );
};
