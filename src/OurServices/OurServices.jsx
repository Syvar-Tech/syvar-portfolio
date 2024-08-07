import React, { useState, useEffect } from "react";
import OurServicesList from "./OurServices.js";
import "../css/OurServices.css";
import Hexagon from "./Hexagon";

function OurServices() {
  useEffect(() => {
    init();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    function init(){
        getHexagonContainerWidth();
        currentWindowWidth();
    }

    function handleResize() {
        getHexagonContainerWidth();
        currentWindowWidth();
    }

  const [hexaContainerWidth, setHexaContainerWidth] = useState();

  function getHexagonContainerWidth() {
    setHexaContainerWidth(document.querySelector(".adrs-hexagon").clientWidth);
  }

  const [windowWidth, setWindowWidth] = useState();

    function currentWindowWidth() {
        setWindowWidth(window.innerWidth);
    }

  return (
    <div
      id="services"
      className="adrs-our-services"
      style={{
        paddingBottom:
          windowWidth <= 920
            ? String(hexaContainerWidth * 3.8) + "px"
            : String(hexaContainerWidth * 2.2) + "px",
      }}
    >
      <div className="adrs-services-title">
        Fulfilling <br />
        your <br />
        <span style={{ color: "#3DB2FF" }}>needs</span> of
      </div>
      {OurServicesList.map((value, index, array) => (
        <Hexagon
          hexaArray={array}
          hexaIndex={index}
          OurServicesList={OurServicesList[index]}
          hexaContainerWidth={hexaContainerWidth}
          windowWidth={windowWidth}
        />
      ))}
    </div>
  );
}

export default OurServices;
