import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./double.scss";

export default function Double({ projects }) {
 

  return (
    <div className="rock-double">
      <div className="rock-imageContainer">
        <div className="rock-topbox">asd</div>
        <div className="rock-content">
          <div className="rock-content-top">
            <div className="rock-number">{projects[0].id}</div>
            <div className="rock-title">{projects[0].title}</div>
          </div>
          <div
            className="rock-text-content"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <div className="rock-left">
              <img
                src={"https://i.postimg.cc/tR5fcG4g/unsplash-e-Ypc-LDXHVb0.png"}
                alt="image"
              />
            </div>
            <div className="rock-right">
              <p>{projects[0].content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rock-imageContainer">
        <div
          className="rock-content"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="rock-content-top">
            <div
              className="rock-number"
              style={{
                transform: "translateZ(75px)",
              }}
            >
              {projects[1].id}
            </div>
            <div className="rock-title">{projects[1].title}</div>
          </div>
          <div
            className="rock-text-content"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <div className="rock-left">
              <img
                src={"https://i.postimg.cc/tR5fcG4g/unsplash-e-Ypc-LDXHVb0.png"}
                alt="image"
              />
            </div>
            <div className="rock-right">
              <p>{projects[1].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
