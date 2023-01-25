import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Tour() {
  return (
    <motion.div
      className="tour-container"
      style={{ backgroundImage: "url(${images/bgimg.jpg})" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="homelink">
        {" "}
        <Link to="/">Home</Link>
      </div>
      <div className="product-box">
        <img src="" className="product img" alt="" />
        <li>
          {" "}
          <Link to="/Shirts">Shirts</Link>
        </li>
      </div>

      <div className="product-box">
        <img src="" className="product img" alt="" />
        <li>
          {" "}
          <Link to="/Shorts">Shorts</Link>
        </li>
      </div>
      <div className="product-box">
        <img src="" className="product img" alt="" />
        <li>
          {" "}
          <Link to="/Torso">Torso</Link>
        </li>
      </div>

      <div className="product-box">
        <img src="" className="product img" alt="" />
        <li>
          {" "}
          <Link to="/Headwears">Headwears</Link>
        </li>
      </div>

      <div className="product-box">
        <img src="" className="product img" alt="" />
        <li>
          {" "}
          <Link to="/Innerwears">Inner Wears</Link>
        </li>
      </div>

      <div className="product-box">
        <img src="" className="product img" alt="" />
        <li>
          {" "}
          <Link to="/Totebags">Totebags</Link>
        </li>
      </div>
    </motion.div>
  );
}

export default Tour;
