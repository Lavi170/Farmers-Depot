import React from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import instagram from "../pictures/instagram.png";
import linkedin from "../pictures/linkedin.png";
import twitter from "../pictures/twitter.png";
const Layout = () => {
  return (
    <div>
      <nav>
        <div className="nav-left-side">
          <img src="src/pictures/main-logo.png" alt="" />
        </div>
        <Link className="nav-link" to={"products"}>
          Products
        </Link>
        <Link className="nav-link" to={"farmers"}>
          Our Farmers
        </Link>
        <Link to={"UserPage"}>
          <button className="login-signup"> Log in </button>
        </Link>
      </nav>
      <Outlet></Outlet>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <Link className="footer-link" to={"ContactUs"}>
              Contact Us
            </Link>
          </div>

          <div className="social-icons">
            <a href="https://www.instagram.com">
              <img className="social-media-icons" src={instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com">
              <img className="social-media-icons" src={linkedin} alt="" />
            </a>
            <a href="https://www.twitter.com">
              <img className="social-media-icons" src={twitter} alt="" />
            </a>
          </div>
          <div className="footer-section">
            <Link className="footer-link" to={"About"}>
              About Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
