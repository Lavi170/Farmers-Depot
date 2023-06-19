import React from "react";
import "./HomePage.css";
import mainpic from "../pictures/crops-field.jpg";
import Watermelon from "../pictures/Watermelon.jpg"
import cotton from "../pictures/cotton.jpg"
import tomatoes from "../pictures/tomatoes.jpg"
const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <img src={mainpic} alt="Big Picture" className="big-picture" />

          <div className="overlay">
            <h1>Welcome to Our Farming Website</h1>
            <p style={{color:"snow"}}>Connecting Farmers and Consumers</p>
          </div>
        </div>
<div className="middle-homepage">
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            At Farmers Depot, our mission is to revolutionize the way farmers
            and consumers connect in the world of agriculture. We are dedicated
            to creating an innovative platform that simplifies the process of
            buying and selling agricultural products. We understand the
            challenges faced by farmers in reaching a broader consumer base and
            the difficulties consumers encounter in finding reliable sources of
            fresh produce. That's why we've created Farmers Depot as a central
            hub where farmers can easily showcase and sell their products, while
            consumers can conveniently access a wide range of high-quality
            agriculture goods. Our platform provides a user-friendly interface
            that empowers farmers to effortlessly upload their products, set
            prices, and manage their inventory with ease. For consumers, Farmers Depot offers a seamless
            shopping experience. With just a few clicks, they can browse through
            a diverse selection of agriculture products, gaining access to fresh
            and locally sourced items.
            Consumers can trust in the authenticity and quality of the goods
            they purchase through our platform. By connecting consumers with local farmers,
            we aim to promote a healthier and more sustainable food system,
            contributing to the well-being of our communities and the
            environment. Join us at Farmers Depot as we bridge the gap between
            farmers and consumers, making agricultural trade more accessible,
            transparent, and convenient for all. Together, we can build a
            stronger connection within the agriculture industry and create a
            positive impact on the way we grow, buy, and enjoy agricultural
            products.
          </p>
        </div>
        <div className="home-crop-example">
            
            <img className="crop-example-pics" src={Watermelon} alt="" />
            <p></p>
            <img className="crop-example-pics" src={tomatoes} alt="" />
            <p></p>
            <img className="crop-example-pics" src={cotton} alt="" />
        </div>
        <div></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
