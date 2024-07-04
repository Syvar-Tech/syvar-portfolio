import { useRef } from "react";
import "./PrashantButton.scss";

const PrashantButton = (props) => {
  const ref = useRef();

  const handleHover = (e) => {
    const x = e.pageX - ref.current.offsetLeft;
    const y = e.pageY - ref.current.offsetTop;
    ref.current.style.setProperty("--x", x + "px");
    ref.current.style.setProperty("--y", y + "px");
  };

  return (
    <>
      <div
        ref={ref}
        onMouseMove={handleHover}
        onClick={props.clickFnc}
        className={`syk-btn2 ${props.loading ? "disabled" : ""}`}
        style={
          props.loading
            ? { border: "2px solid #989898", color: "#989898" }
            : props.buttonMsg === "Sent"
            ? {
                border: "2px solid green",
                color: "white",
                backgroundColor: "green",
              }
            : null
        }
      >
        <span>{props.buttonMsg}</span>
      </div>
    </>
  );
};
export default PrashantButton;
