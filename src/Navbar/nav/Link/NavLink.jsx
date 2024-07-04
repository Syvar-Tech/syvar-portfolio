// import styles from './style.module.scss';
import "./link.scss";
// import Link from 'next/link';
import { Link } from "react-scroll";
// import {Link as nata} from 'react-router-dom'
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import { BiRightArrowAlt } from "react-icons/bi";
// import { Link as Links } from "react-router-dom";

export default function NavLink({ data, isActive, setSelectedIndicator }) {
  const { title, path, index } = data;

  return (
    <motion.div
      className="rock-link"
      onMouseEnter={() => {
        setSelectedIndicator(path);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      whileHover={{ x: 20 }}
      animate="enter"
      exit="exit"
    >
      {/* <motion.div variants={scale} animate={isActive ? "open" : "closed"} className='rock-indicator'>
          <BiRightArrowAlt/>
        </motion.div> */}
      <motion.div
        variants={scale}
        style={{ display: "flex" }}
        animate={isActive ? "open" : "closed"}
      >
        <BiRightArrowAlt />
      </motion.div>
      {/* <Links to={path}>{title}</Links> */}
      {/* <Link
        // activeClass="active"
        to={path}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        // onSetActive={handleSetActive}
      >
        {title}
      </Link> */}
      <a href={`#${path}`} >{title}</a>
      {/* {title} */}
    </motion.div>
  );
}
