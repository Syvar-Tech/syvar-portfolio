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
import Banner from "./Banner/Banner";

function App() {
  // const MouseVariants = {
  //   default: {
  //     x: mPosition.x - 16,
  //     y: mPosition.y - 16,
  //   },
  // };

  useEffect(() => {
    if (window.location.hash !== "") {
      window.location.href = "/";
      window.scrollTo(0, 0);
    }
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
      <Banner/>
      {/* <div className="extraHeight" /> */}
      <SamyakPart1 />
      {/* <Services /> */}
      <div
        className="extraHeight samyak"
        style={{ backgroundColor: "#1E1E1E" }}
      />
      <div className="forAdarshatop" style={{ backgroundColor: "#1E1E1E" }} />
      <OurServices />
      <div className="extraHeight" style={{ backgroundColor: "#1E1E1E" }} />
      {/* <div  style={{ backgroundColor: "#1E1E1E", height: "60px" }} /> */}
      <OurWorks />
      <Banner/>
      {/* <div className="extraHeight" style={{ backgroundColor: "#1E1E1E" }} /> */}
      <SamyakFooter />
    </>
  );
}

export default App;
