import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="input-areas"></div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src="BA.png" alt="Footer Logo" style={{ width: "80px", height: "80px" }}></img>
            </Link>
          </div>
          <small class="website-rights">Brandon Adams 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
