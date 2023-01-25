import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Products from "./Product";

class Shirts extends React.Component {
  constructor() {
    super();
    this.state = {
      size: "",
      sorts: "",
    };
  }

  render() {
    return (
      <>
        <motion.div
          className="shirt-container"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth }}
        ></motion.div>

        <main>
          <div className="content">
            <div className="main"></div>
            <div className="sidebar">cart items</div>
          </div>
        </main>
      </>
    );
  }
}

export default Shirts;
