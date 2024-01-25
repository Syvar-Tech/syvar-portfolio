import React, { useEffect, useRef, useState } from "react";
import "../css/OurWorks.css";
import OurWorksList, { WorksDesciption, workComingSoon } from "./OurWorks.js";
import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion";
import { Element } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

function OurWorks() {
  useEffect(() => {
    init();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // window.onbeforeunload = function () {
    //     window.scrollTo({ top:0, left:0, behavior: "instant"});
    // }
  }, []);

  function init() {
    setStickyContainersSize();
    setWidths();
    countWorkBoxes();
  }

  function handleResize() {
    setScrollEnd();
    setWidths();
    setStickyContainersSize();
    setWebpageWidth();
  }

  // -------------------- Horizontal scroll (Code below) --------------------

  function setStickyContainersSize() {
    document.querySelectorAll(".adrs-our-works").forEach(function (container) {
      const stickyContainerHeight = container.querySelector(".adrs-works-box-container").scrollWidth;
      container.setAttribute("style","height: " + stickyContainerHeight + "px");
    });
    setScrollEnd();
  }

  const [webWidth, setWebWidth] = useState([]);
  const [webContainerHeight, setWebContainerHeight] = useState([]);

  function setWebpageWidth() {
    var widths = Array.from(document.querySelectorAll(".adrs-works-foreground-image"),(container) => container.offsetWidth);

    var heights = Array.from(document.querySelectorAll(".adrs-works-foreground-image"),(container) => container.offsetWidth / 1.6);
    setWebWidth(widths);
    setWebContainerHeight(heights);
  }

  var temp;
  const [horizontalScrollEnd, setHorizontalScrollEnd] = useState("-100%");
  function setScrollEnd() {
    temp = "-" + String(document.querySelector(".adrs-our-works").clientHeight - window.innerWidth) + "px";
    setHorizontalScrollEnd(temp);
  }

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  var transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0", horizontalScrollEnd]
  );

  // -------------------- Panoramic background image animation on scroll (Code Below) --------------------

  const [workDivWidth, setWorkDivWidth] = useState();
  const [titleDivWidth, setTitleDivWidth] = useState();
  const [endDivWidth, setEndDivWidth] = useState();
  const [boxDivWidth, setBoxDivWidth] = useState();
  const [windowWidth, setWindowWidth] = useState();

  function setWidths() {
    setWorkDivWidth(
      document.querySelector(".adrs-works-box-container").scrollWidth
    );
    setTitleDivWidth(
      document.querySelector(".adrs-works-title-box").offsetWidth
    );
    setEndDivWidth(
      document.querySelector(".adrs-works-coming-soon").offsetWidth
    );
    setBoxDivWidth(document.querySelector(".adrs-works-box").offsetWidth);
    setWindowWidth(window.innerWidth);
  }

  var workBoxes = useRef([]);
  var startReverseScroll_BgImage = useRef([]);
  var endReverseScroll_BgImage = useRef([]);

  function countWorkBoxes() {
    startReverseScroll_BgImage.current = [];
    endReverseScroll_BgImage.current = [];

    for (let i = 0; i < OurWorksList.length; i++) {
      workBoxes.current.push(document.querySelector(`.adrs-works-box:nth-of-type(${String(i + 2)})`));
      startReverseScroll_BgImage.current.push(0);
      endReverseScroll_BgImage.current.push(1);
    }
  }

  function transformBg(index, cssProperty) {
    startReverseScroll_BgImage.current[index] = -((windowWidth - (titleDivWidth + boxDivWidth * index)) / (workDivWidth - windowWidth));
    endReverseScroll_BgImage.current[index] =(titleDivWidth + boxDivWidth * (index + 1)) / (workDivWidth - windowWidth);

    if (cssProperty === "x") {
      var transformBackground = useTransform(
        scrollYProgress,
        [startReverseScroll_BgImage.current[index], endReverseScroll_BgImage.current[index]],
        ["0", "50%"]
      );
    } 
    else {
      var right_start = String(titleDivWidth + boxDivWidth * (index + 1) - windowWidth) + "px";
      var right_end = String(titleDivWidth + boxDivWidth * (index + 1) - workDivWidth) + "px";

      var transformBackground = useTransform(
        scrollYProgress,
        [0, 1],
        [right_start, right_end]
      );
    }

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })

    return transformBackground;
  }

  // useEffect(() => {
  //     console.log(startReverseScroll_BgImage.current);
  //     console.log(endReverseScroll_BgImage.current);
  // },[startReverseScroll_BgImage.current,endReverseScroll_BgImage.current]);

  return (
    <Element id="ourWorks" name="ourWorks">
      <div className="adrs-our-works" ref={targetRef}>
        <div className="adrs-our-works-sticky">
          <motion.div style={horizontalScrollEnd !== "-100%" && { x: transformValue }} className="adrs-works-box-container">
            <div className="adrs-works-title-box">
              <div>
                <div className="adrs-works-title" style={{ marginBottom: "20px" }}>
                  {WorksDesciption.title.title1}{" "}
                  <span style={{ color: "rgb(61, 178, 255)" }}>
                    {WorksDesciption.title.title2}
                  </span>
                </div>
                <div className="adrs-works-description">
                  {WorksDesciption.description}
                </div>
              </div>
            </div>
            {OurWorksList.map((value, index) => {
              return (
                <motion.div className="adrs-works-box" key={value.number}>
                  <motion.img className="adrs-works-background-image" src={value.bgImage} style={{x: transformBg(index, "x"), right: transformBg(index, "right")}}/>
                  <div className="adrs-works-box-overlay"></div>
                  <div className="adrs-works-number">
                    {value.number}&nbsp;&nbsp;&nbsp;{value.name}
                  </div>
                  <div className="adrs-works-underline"></div>
                  <motion.div className="adrs-works-foreground-image-container"
                    style={{
                      marginRight: windowWidth / 2 - webWidth[index] / 2,
                      x: windowWidth - titleDivWidth - boxDivWidth * (index + 1),
                      y: "-50%",
                      right: transformValue,
                      height: webContainerHeight[index],
                    }}
                  >
                    <img className="adrs-works-foreground-image" onLoad={setWebpageWidth} src={value.heroImage} />
                  </motion.div>
                </motion.div>
              );
            })}
            <div className="adrs-works-coming-soon">
              <a style={{ color: "white", textDecoration: "none" }} href="#contact">
                {workComingSoon.content}
                <i>
                  <FaArrowRight />
                </i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default OurWorks;
