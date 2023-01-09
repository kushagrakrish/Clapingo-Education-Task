import React from "react";
import BannerOne from "./Banner/BannerOne";
import BannerTwo from "./Banner/BannerTwo";

const HomePage = () => {
  return (
    <div>
      <div className=' mx-auto'>
        <BannerOne />
      </div>
      <BannerTwo />
    </div>
  );
};

export default HomePage;
