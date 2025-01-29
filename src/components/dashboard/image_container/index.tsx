import React from "react";
import "../../ui/styles.scss";
import ReactIcon from "../../../assets/images/reactIcon.png";
import JavascriptIcon from "../../../assets/images/jsIcon.png";
import ReduxIcon from "../../../assets/images/reduxIcon.png";
import MuiIcon from "../../../assets/images/MuiIcon.png";
import Icon from "../../../assets/images/trioIcon.jpg";
import CustomCarousel from "../../ui/custom_carousel/index";
import TypescriptIcon from "../../../assets/images/typescriptIcon.png";
import BootstrapIcon from "../../../assets/images/bootstrapIconImage.png";

function ImageContainer() {
  const images = [ReactIcon, TypescriptIcon, ReduxIcon, BootstrapIcon];

  return (
    <div className="container vh-100px w-100px d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column h-300 flex-md-row w-100 align-items-center justify-content-center gap-4">
        <div className="big-container">
          <div className="box">
            <CustomCarousel images={images} />
          </div>
        </div>
        <div className="small-container">
          <div className="box">
            <img src={Icon} alt="Small Content" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
