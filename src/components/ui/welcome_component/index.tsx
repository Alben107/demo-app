import React from "react";
import "../styles.scss";

const WelcomeSection: React.FC = () => {
  return (
    <div className="layout-container">
      {" "}
      <section className="container welcome-section">
        <div className="welcome-desktop d-lg-flex">
          <div className="welcome-text">WELCOME</div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
