import React from "react";
import { Link } from "react-router-dom";
import "./FarmerPage.css";
const FarmerPage = () => {
  return (
  <div className="farmers-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome, Farmer!</h1>
        <br />
        <div className="links">
          <Link to="/my-products" className="link">
            My Products
          </Link>
          <Link to="/add-product" className="link">
            Add Product
          </Link>
        </div>
      </div>
    </div>)
};

export default FarmerPage;