import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Home-banner-image.jpg";
import Navbar from "./navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Nikmati Kuliner Terbaik. Setiap Sajian Adalah Karya Seni.
          </h1>
          <p className="primary-text">
            Nikmati Keajaiban Rasa di Setiap Gigitan. Hadirkan Kenikmatan Kuliner Terbaik di Meja Anda.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;