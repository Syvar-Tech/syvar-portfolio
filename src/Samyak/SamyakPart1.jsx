import React, { useEffect, useRef, useState } from "react";
import "./syk.scss";
import image1 from "./images/images.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { animate, delay, motion } from "framer-motion";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Element } from "react-scroll";
import { FaBookOpen } from "react-icons/fa";
import { BsFillBrushFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoCodeSquare } from "react-icons/go";
import SyvarLogo from "./SyvarLogo";

function SamyakPart1() {
  const [activeTitle, setActiveTitle] = useState("strategy");
  const [animation, setAnimation] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const ref = useRef(null);

  const [currentImage, setCurrentImage] = useState("");

  const isSmallScreen = window.innerWidth < 821;

  const { scrollYProgress, scrollTo } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
    // offset: ["start end", "end end"],
  });

  // const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const borderProgress = useTransform(scrollYProgress, [0, 0.2], [160, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest < 0.5046632124352332) {
      setActiveTitle("strategy");
    } else if (latest > 0.5046632124352332 && latest < 0.6697754749568222) {
      setActiveTitle("design");
    } else if (latest > 0.6697754749568222 && latest < 0.8348877374784112) {
      setActiveTitle("develop");
    } else if (latest > 0.8348877374784112) {
      setActiveTitle("customerserv");
    }

    if (latest > 0.30962491153573957 && latest < 0.99999) {
      setAnimation(true);
      setTextVisible(true);
    }
    // if (latest < 0.01 || latest > ) {
    //   setTextVisible(false);
    // }
    // console.log("Page scroll: ", latest);
    // console.log(scrollYProgress.current);
  });

  const transition = { duration: 1, ease: "easeInOut" };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (activeTitle === "strategy") {
      setCurrentImage(image1);
    } else if (activeTitle === "design") {
      setCurrentImage(image2);
    } else {
      setCurrentImage(image3);
    }
  }, [activeTitle]);

  // const renderImageContainer = () => {
  //   return (
  //     <motion.div
  //       key={activeTitle}
  //       className="syk-image-container"
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: -20 }}
  //       transition={transition}
  //     >
  //       {currentImage && <img src={currentImage} />}
  //     </motion.div>
  //   );
  // };

  //Text visible

  const renderTextTitle = () => {
    return (
      textVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="syk-main-text"
        >
          <div className="syk-heading-top">Our path to your</div>
          <div className="syk-heading-bot">Success</div>
        </motion.div>
      )
    );
  };

  // const textAnimateVariant = {
  //   visible: (i) => ({
  //     opacity: 1,
  //     transition: {
  //       delay: i * 2,
  //       duration: 0.5,
  //     },
  //   }),
  //   hidden: { opcaity: 0 },
  // };

  return (
    <Element id="process" name="process">
      <div ref={ref} className="background-scroll">
        <motion.div
          className="syk-main-container"
          style={
            isSmallScreen
              ? null
              : {
                  borderRadius: borderProgress,
                  // transform: `scale(${scaleProgress})`,
                  opacity: opacityProgress,
                }
          }
        >
          {!isSmallScreen ? (
            <motion.div
              // className="animated-syvar-logo"
              initial={{ scale: 1, x: -1, y: 450 }}
              // animate={{ scale: 0.7, x: 400, y: 462 }}
              // transition={{ delay: 2.3, duration: 1 }}
              animate={[
                { scale: 0.8, transition: { duration: 0.7, delay: 3 } },
                { x: 400, y: 482, transition: { duration: 2, delay: 3.9 } },
              ]}
              transition={{ delay: 3 }}
            >
              <div className="animated-syvar-logo">
                {animation && <SyvarLogo />}
              </div>
            </motion.div>
          ) : (
            <motion.div
              // className="animated-syvar-logo"
              initial={{
                scale: 1,
                opacity: 1,
                // x: "0.12rem", y: "307px"
              }}
              style={{
                position: "relative",
                left: "53%",

                top: "28%",

                transform: "translateX(-50%)",
              }}
              // animate={{ scale: 0.7, x: 400, y: 462 }}
              // transition={{ delay: 2.3, duration: 1 }}
              animate={[
                {
                  scale: 1.4,
                  opacity: 1,
                },
                // { x: 400, y: 462, transition: { duration: 2, delay: 3.9 } },
              ]}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="animated-syvar-logo">
                {animation && <SyvarLogo />}
              </div>
            </motion.div>
          )}

          {renderTextTitle()}

          {/* {textVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              variants={texttransition}
              className="syk-main-text"
            >
              <div className="syk-heading-top">Our path to your</div>
              <div className="syk-heading-bot">Success</div>
            </motion.div>
          )} */}
          {textVisible && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="syk-main-content"
            >
              <div className="syk-left-side">
                <div className="syk-strategy">
                  {activeTitle === "strategy" ? (
                    <>
                      <div className="syk-medium-text syk-textmargin syk-blue-text">
                        <FaBookOpen />
                        Strategy
                      </div>
                      <motion.div
                        className="syk-small-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={transition}
                      >
                        We focus on effective strategies based on our customer
                        needs and requirements to deliver simple, successful and
                        sustainable projects.
                      </motion.div>
                      {/* {isSmallScreen && (
                          <div className="syk-right-side">
                            <motion.div
                              className="syk-image-container"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={transition}
                            >
                               {currentImage && <img src={currentImage} />} 
                              image
                            </motion.div>
                          </div>
                        )} */}
                    </>
                  ) : (
                    <>
                      <div
                        className="syk-medium-text syk-textmargin"
                        onClick={() => {
                          setActiveTitle("strategy");
                          window.scrollTo({
                            top: 1332,
                            behavior: "instant",
                          });
                        }}
                      >
                        <FaBookOpen />
                        Strategy
                      </div>
                    </>
                  )}

                  {activeTitle === "design" ? (
                    <>
                      <div className="syk-medium-text syk-textmargin syk-blue-text">
                        <BsFillBrushFill />
                        Design
                      </div>
                      <motion.div
                        className="syk-small-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={transition}
                      >
                        We offer range of design options and allow you with
                        personal modification to suit your preference. The
                        designs will reflect the ambitions and confidence of
                        your business.
                      </motion.div>
                      {/* {isSmallScreen && (
                          <div className="syk-right-side">
                            <motion.div
                              className="syk-image-container"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={transition}
                            >
                             {currentImage && <img src={currentImage} />} 
                              image
                            </motion.div>
                          </div>
                        )} */}
                    </>
                  ) : (
                    <>
                      <div
                        className="syk-medium-text syk-textmargin"
                        onClick={() => {
                          setActiveTitle("design");
                          window.scrollTo({
                            top: 1817,
                            behavior: "instant",
                          });
                        }}
                      >
                        <BsFillBrushFill />
                        Design
                      </div>
                    </>
                  )}
                  {activeTitle === "develop" ? (
                    <>
                      <div className="syk-medium-text syk-textmargin syk-blue-text">
                        <GoCodeSquare />
                        Develop
                      </div>
                      <motion.div
                        className="syk-small-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={transition}
                      >
                        We focus on developing projects that are scalable,
                        efficient and reliable. We ensure that project we build
                        will result in success of your company.
                      </motion.div>
                      {/* {isSmallScreen && (
                          <div className="syk-right-side">
                            <motion.div
                              className="syk-image-container"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={transition}
                            >
                               {currentImage && <img src={currentImage} />} 
                              image
                            </motion.div>
                          </div>
                        )} */}
                    </>
                  ) : (
                    <>
                      <div
                        className="syk-medium-text syk-textmargin"
                        onClick={() => {
                          setActiveTitle("develop");
                          window.scrollTo({
                            top: 2297,
                            behavior: "instant",
                          });
                        }}
                      >
                        <GoCodeSquare />
                        Develop
                      </div>
                    </>
                  )}
                  {activeTitle === "customerserv" ? (
                    <>
                      <div className="syk-medium-text syk-textmargin syk-blue-text">
                        <RiCustomerService2Fill />
                        Customer Service
                      </div>
                      <motion.div
                        className="syk-small-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={transition}
                      >
                        Our values integrity and service are focused on
                        providing the remarkable support for our valued clients.
                        In Syvar Tech, we build relation, trust and confident
                        bond with customers.
                      </motion.div>
                      {/* {isSmallScreen && (
                          <div className="syk-right-side">
                            <motion.div
                              className="syk-image-container"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={transition}
                            >
                               {currentImage && <img src={currentImage} />} 
                              image
                            </motion.div>
                          </div>
                        )} */}
                    </>
                  ) : (
                    <>
                      <div
                        className="syk-medium-text syk-textmargin"
                        onClick={() => {
                          setActiveTitle("customerserv");
                          window.scrollTo({
                            top: 2782,
                            behavior: "instant",
                          });
                        }}
                      >
                        <RiCustomerService2Fill />
                        Customer Service
                      </div>
                    </>
                  )}
                </div>
              </div>
              {!isSmallScreen && (
                <div className="syk-right-side">
                  {/* {renderImageContainer()} */}
                  {/* {animation && 
                // <SyvarLogo />
                } */}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </Element>
  );
}

export default SamyakPart1;
