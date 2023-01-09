import React from "react";
import BannerOne from "./Banner/BannerOne";
import BannerTwo from "./Banner/BannerTwo";
import Cards from "./CardSection/Cards";
import Work from "./WorkSection/Work";

const HomePage = () => {
  return (
    <div>
      <div className=' mx-auto'>
        <BannerOne />
      </div>
      <BannerTwo />
      <Cards />
      <Work />
    </div>
  );
};

export default HomePage;
