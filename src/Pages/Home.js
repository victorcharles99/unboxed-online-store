import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="home-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
      >
        <div className="home-content">
          <small>Welcome to</small>
          <h2>
            {" "}
            The UN-BOXED <br />
            virtual show house
          </h2>
          <button>
            <Link to="/Tour">Take a tour</Link>
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
