import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Shirts from "./Shirts";
import Home from "./Home";
import Tour from "./Tour";
import Torso from "./Torso";
import Innerwears from "./Innerwears";
import Shorts from "./Shorts";
import Headwears from "./Headwears";
import Totebags from "./Totebags";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="shirts" element={<Shirts />} />
        <Route path="tour" element={<Tour />} />
        <Route path="innerwears" element={<Innerwears />} />
        <Route path="headwears" element={<Headwears />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="torso" element={<Torso />} />
        <Route path="totebags" element={<Totebags />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
