import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Totebags() {
  return (
    <>
      <motion.div
        className="totebags-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
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

export default Totebags;
