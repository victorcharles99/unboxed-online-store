import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Shorts() {
  return (
    <>
      <motion.div
        className="shorts-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <header>
        <nav className="navigation">
          <a href="#" className="logo">
            UN-BOXED
          </a>
        </nav>
        <div className="homelink">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="tourlink">
          <li>
            {" "}
            <Link to="/Tour">Back to Touring</Link>
          </li>
        </div>
      </header>
    </>
  );
}

export default Shorts;
