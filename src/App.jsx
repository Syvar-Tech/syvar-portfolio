import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Services from "./Services/Services";

import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import SamyakPart1 from "./Samyak/SamyakPart1";
import SamyakFooter from "./Samyak/SamyakFooter";
import OurWorks from "./OurWorks/OurWorks.jsx";
import OurServices from "./OurServices/OurServices.jsx";

function App() {
  // const MouseVariants = {
  //   default: {
  //     x: mPosition.x - 16,
  //     y: mPosition.y - 16,
  //   },
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <motion.div
          className="rock-mouseCursor"
          style={{display: isHovered? 'none' : 'block'}}
          variants={MouseVariants}
          animate= 'default'
        /> */}
      <Navbar />
      <Hero />
      <div className="extraHeight" />
      <SamyakPart1 />
      {/* <Services /> */}
      <div className="extraHeight"  style={{backgroundColor: "#1E1E1E"}}/>
      <OurServices />
      <div className="extraHeight" style={{backgroundColor: "#1E1E1E"}}/>
      <OurWorks />
      <div className="extraHeight" />
      <SamyakFooter />
    </>
  );
}

export default App;
