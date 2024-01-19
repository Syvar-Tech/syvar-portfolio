import React from "react";
import "./SyvarLogo.css";

function SyvarLogo() {
  return (
    <div class="Syvar_Hover" id="Syvar_Tech_Logo">
      <div class="Syvar_Logo">
        {/* <!-- Hidden Div --> */}
        <div class="orange top-left hidden-top-left"></div>
        <div class="orange top-right hidden-top-right"></div>
        <div class="orange mid-orange-left hidden-mid-orange-left"></div>
        <div class="orange mid-orange-right hidden-mid-orange-right"></div>
        <div class="orange-circle circle third-circle hidden-third-circle"></div>
        <div class="orange orange-diagonal hidden-orange-diagonal"></div>
        <div class="circle blue-top-circle first-circle hidden-first-circle">
          {/* <!--  --> */}
        </div>
        <div class="circle blue-bottom-circle second-circle hidden-second-circle"></div>
        <div class="blue blue-diagonal-top hidden-blue-diagonal-top"></div>
        <div class="blue blue-diagonal-bottom hidden-blue-diagonal-bottom"></div>
        <div class="blue blue-mid-right hidden-blue-mid-right"></div>
        <div class="blue blue-bottom-right hidden-blue-bottom-right"></div>
        <div class="blue blue-bottom-left hidden-blue-bottom-left"></div>
        <div class="blue blue-mid-left hidden-blue-mid-left"></div>

        {/*<!-- Visible Div -->*/}
        <div class="orange top-left"></div>
        <div class="orange top-right"></div>
        <div class="orange mid-orange-left"></div>
        <div class="orange mid-orange-right"></div>
        <div class="orange-circle circle third-circle"></div>
        <div class="orange orange-diagonal"></div>
        <div class="circle blue-top-circle first-circle"></div>
        <div class="circle blue-bottom-circle second-circle"></div>
        <div class="blue blue-diagonal-top"></div>
        <div class="blue blue-diagonal-bottom"></div>
        <div class="blue blue-mid-right"></div>
        <div class="blue blue-bottom-right"></div>
        <div class="blue blue-bottom-left"></div>
        <div class="blue blue-mid-left"></div>
      </div>
    </div>
  );
}

export default SyvarLogo;
