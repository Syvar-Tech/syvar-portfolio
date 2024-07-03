import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Services from "./Services/Services";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import SamyakPart1 from "./Samyak/SamyakPart1";
import SamyakFooter from "./Samyak/SamyakFooter";
import OurWorks from "./OurWorks/OurWorks.jsx";
import OurServices from "./OurServices/OurServices.jsx";
import Banner from "./Banner/Banner";
import EuroCup from "./EuroCupPrediction/EuroCup.jsx";
import EuroCupPrediction from "./EuroCupPrediction/EuroCupPrediction.jsx";
import Thankyou from "./Thankyou/Thankyou.jsx";

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
      
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <Banner/>
            {/* <div className="extraHeight" /> */}
            <SamyakPart1 />
            {/* <Services /> */}
            <div className="extraHeight samyak" style={{ backgroundColor: "#1E1E1E" }}/>
            <div className="forAdarshatop" style={{  backgroundColor: "#1E1E1E" }}/>
            <OurServices />
            <div className="extraHeight" style={{ backgroundColor: "#1E1E1E" }} />
            <OurWorks />
            <div className="extraHeight" />
            <Banner/>
            <SamyakFooter />
            <Link to={"/eurocup"}>
              <button type="button">
                Predict EuroCup
              </button>
            </Link>
          </div>
        } />
        <Route path="/eurocup" element={<EuroCup />} />
        <Route path="/eurocup-prediction" element={<EuroCupPrediction />} />
        <Route path="/Thank-you" element={<Thankyou />} />
      </Routes>
      
      
    </>
  );
}

export default App;
