import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center py-3 d-flex flex-column justify-content-center align-items-center gap-3">
        <div className="social-icons-footer">
          <button className="social-btn">
            <Google />
          </button>
          <button className="social-btn">
            <Facebook />
          </button>
          <button className="social-btn">
            <LinkedIn />
          </button>
          <button className="social-btn">
            <Twitter />
          </button>
        </div>

        <p className="mb-0">example@email.com</p>
        <p className="mb-0">Copyright © 2020 Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
