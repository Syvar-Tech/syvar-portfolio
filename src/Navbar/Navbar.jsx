"use client";
// import styles from './style.module.scss'
import "./navbar.scss";
import { useEffect, useState, useRef } from "react";
import Nav from "./nav/Nav";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { useParams } from "react-router-dom";
// import { usePathname } from 'next/navigation';
import logo from "../assets/logo.png";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = "home";

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const [displayNavItems, setDisplayNavItems] = useState(true);
  useEffect(() => {
    function displayNavItem() {
      if (window.scrollY > 0) {
        setDisplayNavItems(false);
      } else {
        setDisplayNavItems(true);
      }
    }
    window.addEventListener("scroll", displayNavItem);

    return () => {
      window.removeEventListener("scroll", displayNavItem);
    };
  }, []);

  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(".rock-start-button-container", { scale: 1.1 });
    animate(".rock-start-button-initial", { y: -100, });
    animate(".rock-start-button-hovered", { opacity: 1, y: 0, },{ type: "easeInOut" });
  };

  const handleOut = () => {
    animate(".rock-start-button-container", { scale: 1 });
    animate(".rock-start-button-initial", { y: 0, },{ type: "easeInOut" });
    animate(".rock-start-button-hovered", { opacity: 0, y: 100, });
  };
  return (
    <>
      <div
        className="rock-navBar"
        style={window.scrollY > 0 ? { height: "80px" } : {}}
      >
        <motion.div
          className="rock-syvar-logo"
          initial={{
            y: 0,
          }}
          animate={window.scrollY > 0 ? { y: -150 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="" />
        </motion.div>

        <div className="rock-header">
          <motion.div
            ref={scope}
            id="btn"
            initial={{
              y: 0,
            }}
            animate={window.scrollY > 0 ? { y: -100 } : {}}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact">
              <div
                className="rock-start-button-container"
                onMouseLeave={handleOut}
                onMouseEnter={handleHover}
              >
                <motion.p
                  className="rock-start-button-initial"
                  // initial={{
                  //   x: "-50%"
                  // }}
                  transition={{ duration: 0.5,type: 'easeInOut' }}

                >
                  Start Project?
                </motion.p>
                <motion.p
                  className="rock-start-button-hovered"
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  transition={{ duration: 0.5,type: 'easeInOut' }}
                >
                  Send Inquiry?
                </motion.p>
              </div>
            </a>
          </motion.div>
          {/* <motion.button
            initial={{
              y: 0,
            }}
            animate={window.scrollY > 0 ? { y: -100 } : {}}
            transition={{ duration: 0.5 }}
            className="rock-start-button-container"
            // style={displayNavItems ? { display: "block" } : { display: "none" }}
          >
            <motion.span
              className="rock-start-button"
              // initial={{
              //   x: "-50%"
              // }}
            >
              Hover Me
            </motion.span>
            <motion.span
              className="rock-start-button"
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              Hovered
            </motion.span>
            
          </motion.button> */}
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="rock-button"
          >
            <div
              className={`rock-burger ${isActive ? "rock-burgerActive" : ""}`}
              style={
                isActive && window.scrollY <= 0
                  ? {
                      transition: "all 0.5s linear",
                      transform: "translateY(-50px)",
                    }
                  : {}
              }
            ></div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
          </div>
        </div>

        {/* <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence> */}
      </div>
    </>
  );
}
