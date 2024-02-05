import React, { useState } from "react";
// import styles from './style.module.scss';
import "./nav.scss";
import { motion, useAnimate } from "framer-motion";
// import { usePathname } from 'next/navigation';

import { menuSlide } from "../anim";
import NavLink from "./Link/NavLink";
import Curve from "./Curve/Curve";
import Footer from "./Footer/NavFooter";
import { useParams } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "Process",
    path: "process",
  },
  {
    title: "Services",
    path: "services",
  },
  {
    title: "Work",
    path: "ourWorks",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

export default function Nav() {
  const pathname = "about";
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(".rock-start-button-container-nav", { scale: 1.1 });
    animate(".rock-start-button-initial", { y: -100 });
    animate(".rock-start-button-hovered", { opacity: 1, y: 0 });
  };

  const handleOut = () => {
    animate(".rock-start-button-container-nav", { scale: 1 });
    animate(".rock-start-button-initial", { y: 0 });
    animate(".rock-start-button-hovered", { opacity: 0, y: 100 });
  };
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="rock-menu"
    >
      <div className="rock-body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="rock-nav"
        >
          {/* <div className='header'>
                        <p>Navigation</p>
                    </div> */}
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.path}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
          <motion.div className="rock-link-btn rock-link" ref={scope} id="btn">
            <a href="#contact">
              <div
                className="rock-start-button-container-nav"
                onMouseLeave={handleOut}
                onMouseEnter={handleHover}
              >
                <motion.span
                  className="rock-start-button-initial"
                  // initial={{
                  //   x: "-50%"
                  // }}
                >
                  Start Project?
                </motion.span>
                <motion.span
                  className="rock-start-button-hovered"
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                >
                  Send Inquiry?
                </motion.span>
              </div>
            </a>
          </motion.div>
        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}
