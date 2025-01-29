import React from "react";
import Header from "../../components/dashboard/header";
import HomeLayout from "../../components/ui/welcome_component";
import ImageContainer from "../../components/dashboard/image_container";
import CardContainer from "../../components/dashboard/card_container";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <Header />
      <HomeLayout />
      <ImageContainer />
      <CardContainer />
    </div>
  );
};

export default HomePage;
