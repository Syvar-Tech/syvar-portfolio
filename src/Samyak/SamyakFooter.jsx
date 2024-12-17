import { React, useRef, useEffect, useState } from "react";
import "./footer.scss";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FramerMagnetic from "./framer";
import PrashantButton from "./PrashantButton";
import useAutosizeTextArea from "./useAutosizeTextArea.jsx";
import { Element } from "react-scroll";
import axios from "axios";

function SamyakFooter() {
  const [showForm, setShowForm] = useState(false);
  const isSmallScreen = window.innerWidth < 821;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonMsg, setbuttonMsg] = useState("Send");
  const [redLine, setRedLine] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.9;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  function handleRightButton() {
    setShowForm(true);
  }
  // const controls = useAnimationControls();
  const [TransformX, setTransformX] = useState("0");
  function handleMouseEnter() {
    setTransformX("50px");
    // controls.start({
    //   x: "0px",
    // });
  }

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseOver = (e) => {
  //   const x = e.pageX - e.target.offsetLeft;
  //   const y = e.pageY - e.target.offsetTop;
  //   setPosition({ x, y });
  // };

  // useEffect(() => {
  //   console.log(`x: ${position.x}, y: ${position.y}`);
  // }, [position]);

  // const [mPosition, setmPosition] = useState({ x: 0, y: 0 });
  // const [cursorVariant, setCursorVariant] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setmPosition({
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

  // const MouseVariants = {
  //   default: {
  //     x: mPosition.x - 16,
  //     y: mPosition.y - 16,
  //   },
  //   button: {
  //     backgroundColor: "yellow",
  //     x: mPosition.x - 150,
  //     y: mPosition.y - 150,
  //     height: 300,
  //     width: 300,
  //     mixBlendMode: "difference",
  //   },
  // };
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, about);

  const handleChange = (evt) => {
    const inputValue = evt.target.value;

    if (inputValue.length <= 300) {
      setAbout(inputValue);
    }
  };

  const validateAndSetRedLine = (fieldName, value) => {
    if (!value) {
      setRedLine((prevRedLine) => ({ ...prevRedLine, [fieldName]: fieldName }));
    } else {
      setRedLine((prevRedLine) => ({ ...prevRedLine, [fieldName]: "" }));
    }
  };

  function handleSubmit() {
    // console.log(`clicked`);
    setLoading(true);
    setbuttonMsg("Sending");
    if (!name || !email || !phone || !about) {
      validateAndSetRedLine("name", name);
      validateAndSetRedLine("email", email);
      validateAndSetRedLine("phone", phone);
      validateAndSetRedLine("about", about);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setRedLine((prevRedLine) => ({
          ...prevRedLine,
          email: "email",
        }));
      }
      setTimeout(() => {
        setRedLine({ name: "", email: "", phone: "", about: "" });
      }, 4000);
      setLoading(false);
      setbuttonMsg("Send");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setRedLine((prevRedLine) => ({
        ...prevRedLine,
        email: "email",
      }));
      setTimeout(() => {
        setRedLine({ name: "", email: "", phone: "", about: "" });
      }, 4000);
      setLoading(false);
      setbuttonMsg("Send");
      return;
    }

    axios
      .post(`https://syyvar.com.np/api/contactUs`, {
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerMessage: about,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setAbout("");
        setLoading(false);
        setbuttonMsg("Sent");
        setTimeout(() => {
          setbuttonMsg("Send");
        }, 2000);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Element id="contact" name="contact" className="syk-footer-main-container">
      {/* <motion.div
        className="syk-cursor"
        variants={MouseVariants}
        animate={cursorVariant}
      /> */}
      <div className="syk-footer-content">
        <div className="syk-footer-title">Got a project?</div>

        <div className="syk-footer-string-line">
          <div
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className="syk-box"
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>

        <div className="syk-footer-mid-section">
          <div className="syk-footer-left-section">
            <div className="syk-footer-left-top">
              <div className="syk-footer-text">
                <motion.a
                  href="tel:9840575736"
                  className="text-only-number"
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  +977 9840575736
                </motion.a>
              </div>
              <div className="syk-footer-text">
                <motion.a
                  href="mailto:syvar.tech@gmail.com"
                  className="text-only-mail"
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  syvar.tech@gmail.com
                </motion.a>
              </div>
            </div>
            {!isSmallScreen && (
              <div className="syk-footer-left-bottom">
                <a target="_blank" href="https://www.facebook.com/syvartech/">
                  <FramerMagnetic>
                    <FaFacebookF />
                  </FramerMagnetic>
                </a>
                <a target="_blank" href="https://www.instagram.com/syvartech">
                  <FramerMagnetic>
                    <RiInstagramFill />
                  </FramerMagnetic>
                </a>
                <FramerMagnetic>
                  <FaLinkedinIn />
                </FramerMagnetic>
              </div>
            )}
          </div>
          {showForm ? (
            <div
              className="syk-footer-right-form"
              // animate={{ scale: 0.9, opacity: 1, translateX: 0 }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="syk-input-bar">
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={
                    redLine.name ? { borderBottom: "1px solid #ff4f4f" } : {}
                  }
                  required
                ></input>
              </div>
              <div className="syk-input-bar">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={
                    redLine.email ? { borderBottom: "1px solid #ff4f4f" } : {}
                  }
                  required
                ></input>
              </div>
              <div className="syk-input-bar">
                <input
                  type="tel"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => {
                    if (/^[0-9+]*$/.test(e.target.value)) {
                      setPhone(e.target.value);
                    }
                  }}
                  style={
                    redLine.phone ? { borderBottom: "1px solid #ff4f4f" } : {}
                  }
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                ></input>
              </div>
              <div className="syk-input-bar">
                {/* <input
                  type="text"
                  placeholder="tell us about your project"
                ></input> */}
                <textarea
                  id="about-project"
                  value={about}
                  onChange={handleChange}
                  placeholder="tell us about your project"
                  style={
                    redLine.about ? { borderBottom: "1px solid #ff4f4f" } : {}
                  }
                  ref={textAreaRef}
                  rows={1}
                  required
                />
                <span>{about.length}/300</span>
              </div>
              <div className="syk-form-submit">
                <PrashantButton
                  // onClick={handleSubmit}
                  clickFnc={handleSubmit}
                  loading={loading}
                  buttonMsg={buttonMsg}
                />

                {/* <RippleButton /> */}
              </div>
            </div>
          ) : (
            <motion.div
              className="syk-footer-right-section"
              initial={{ scale: 1, x: 100 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{ duration: 1, easeInOut }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => {
                setTransformX("0");
              }}
              // whileHover={{ scale: 1.1 }}
              onClick={handleRightButton}
            >
              <AnimatePresence>
                <motion.div className="syk-footer-right-button">
                  Let's Work Together{" "}
                  <div>
                    <GoArrowRight
                      style={{
                        transform: `translateX(${TransformX})`,
                        transition: "0.5s ease-in-out",
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <div className="syk-footer-bottom">
          {isSmallScreen && (
            <div className="syk-footer-left-bottom">
              <a target="_blank" href="https://www.facebook.com/syvartech/">
                <FramerMagnetic>
                  <FaFacebookF />
                </FramerMagnetic>
              </a>
              <a target="_blank" href="https://www.instagram.com/syvartech">
                <FramerMagnetic>
                  <RiInstagramFill />
                </FramerMagnetic>
              </a>
              <FramerMagnetic>
                <FaLinkedinIn />
              </FramerMagnetic>
            </div>
          )}
          <div className="syk-footer-bottom-left">
            &copy; 2024, T&C Privacy policy 
          </div>
          {/* <div className="syk-footer-bottom-right">LOGOS</div> */}
        </div>
      </div>
    </Element>
  );
}

export default SamyakFooter;
