import React from "react";
import "./styles.scss";

interface CardComponentProps {
  title: string;
  subtitle: string;
  flag: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  subtitle,
  flag,
}) => {
  return (
    <div className="card card-styles">
      <div className="card-body d-flex align-items-center">
        <div className="me-3 flag-container">
          <img className="w-100 h-100 me-3 img-fluids" src={flag} alt={title} />
        </div>
        <div>
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-subtitle text-muted">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
