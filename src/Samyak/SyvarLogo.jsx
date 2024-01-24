import React from "react";
import "./SyvarLogo.css";

function SyvarLogo() {
  return (
    <div className="Syvar_Hover" id="Syvar_Tech_Logo">
      <div className="Syvar_Logo">
        {/* <!-- Hidden Div --> */}
        <div className="orange top-left hidden-top-left"></div>
        <div className="orange top-right hidden-top-right"></div>
        <div className="orange mid-orange-left hidden-mid-orange-left"></div>
        <div className="orange mid-orange-right hidden-mid-orange-right"></div>
        <div className="orange-circle circle third-circle hidden-third-circle"></div>
        <div className="orange orange-diagonal hidden-orange-diagonal"></div>
        <div className="circle blue-top-circle first-circle hidden-first-circle">
          {/* <!--  --> */}
        </div>
        <div className="circle blue-bottom-circle second-circle hidden-second-circle"></div>
        <div className="blue blue-diagonal-top hidden-blue-diagonal-top"></div>
        <div className="blue blue-diagonal-bottom hidden-blue-diagonal-bottom"></div>
        <div className="blue blue-mid-right hidden-blue-mid-right"></div>
        <div className="blue blue-bottom-right hidden-blue-bottom-right"></div>
        <div className="blue blue-bottom-left hidden-blue-bottom-left"></div>
        <div className="blue blue-mid-left hidden-blue-mid-left"></div>

        {/*<!-- Visible Div -->*/}
        <div className="orange top-left"></div>
        <div className="orange top-right"></div>
        <div className="orange mid-orange-left"></div>
        <div className="orange mid-orange-right"></div>
        <div className="orange-circle circle third-circle"></div>
        <div className="orange orange-diagonal"></div>
        <div className="circle blue-top-circle first-circle"></div>
        <div className="circle blue-bottom-circle second-circle"></div>
        <div className="blue blue-diagonal-top"></div>
        <div className="blue blue-diagonal-bottom"></div>
        <div className="blue blue-mid-right"></div>
        <div className="blue blue-bottom-right"></div>
        <div className="blue blue-bottom-left"></div>
        <div className="blue blue-mid-left"></div>
      </div>
    </div>
  );
}

export default SyvarLogo;
