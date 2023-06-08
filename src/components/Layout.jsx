import React from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import instagram from "../pictures/instagram.png";
import linkedin from "../pictures/linkedin.png";
import twitter from "../pictures/twitter.png";
import logo from "../pictures/main-logo.png"
const Layout = () => {
  return (
    <div>
      <nav>
        <div className="nav-left-side">
         <a href="/layout"> <img src={logo} alt="" style={{height:"7vw"}}/> </a>
        </div>
        <Link  to={"/AllProducts"}>
          <button id="cta">
    <span id="hover-underline-animation"> Shop now </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
        </Link>
        <Link to={"/layout/Farmers"}>
        <button id="cta">
    <span id="hover-underline-animation"> Our Trusted Farmers </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
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
