import React, { useState, useEffect } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
const Hero = () => {
  // const [mPosition, setMPosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     // console.log(e.clientX);
  //     // console.log(e.clientY);
  //     setMPosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);
  // const [isHovered, setIsHovered] = useState(false);

  // // const [isHovered, setIsHovered] = useState(false);
  // // const { x, y } = MousePosition();
  // const size = isHovered ? 400 : 40;
  // const none = 0;
  return (
    <Element name="home" id="home" className="rock-hero-main-container">
      <div className="rock-main">
        {/* <motion.div
          className="rock-mask"
          animate={{
            WebkitMaskPosition: `${mPosition.x - size / 2}px ${
              mPosition.y - size / 2
            }px`,
            WebkitMaskSize: `${isHovered ? size : none}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          style={{ display: isHovered ? 'block' : 'none' }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            One of the most important pieces of the great product experience is
            you.
          </p>
          <p className="rock-tagLine">We sculpt dreams into digital marvels.</p>
        </motion.div> */}
        <div className="hero-orange" />
        <div className="hero-blue" />
        <div className="rock-body">
          <p className="rock-tagline">We sculpt dreams into digital marvels.</p>
          <h2 className="rock-mainTagline">
            Your Essence, our excellence, elevating the product experience
            together.
          </h2>
          <button type="button" className="rock-hero-btn">
            Start a project
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
