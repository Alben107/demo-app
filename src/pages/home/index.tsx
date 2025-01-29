import React from "react";
import Header from "../../components/dashboard/header";
import HomeLayout from "../../components/ui/welcome_component";
import ImageContainer from "../../components/dashboard/image_container";
import CardContainer from "../../components/dashboard/card_container";
import Footer from "../../components/dashboard/footer";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <Header />
      <HomeLayout />
      <ImageContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
