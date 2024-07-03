import "../css/EuroCup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EuroCup(){

    const [value, setValue] = useState();
    const navigate = useNavigate();

    function addInstaUsername() {
        localStorage.setItem("SyvarEuroInstaId", value);
        navigate("/eurocup-prediction");
    }

    return(
        <div>
            <div className="eurocup-heading">
                <div className="eurocup-main-heading">Predict And Win</div>
                <div className="eurocup-sub-heading">Let's win exciting prizes</div>
            </div>
            <div className="eurocup-prediction-participation">
                <div className="eurocup-column">
                    <div className="eurocup-heading2">To Participate</div>
                    <ul className="eurocup-unordered-list">
                        <li>Follow us on our instagram</li>
                        <li>Mention 3 friends in post related to the prediction</li>
                        <li>Share the prediction post on your story for 24 hours</li>
                    </ul>
                    <div className="eurocup-enter-username">Enter your instagram username</div>
                    <input className="eurocup-input-username" placeholder="Enter your insta username" onChange={(event) => {setValue(event.target.value)}} value={value}/>
                    <div onClick={addInstaUsername}>
                        <button className="eurocup-btn eurocup-participate-btn">Start Prediction</button>
                    </div>
                </div>
                <div className="eurocup-column">
                    <div className="eurocup-heading2">Giveaway prizes</div>
                    <ul className="eurocup-unordered-list" style={{fontWeight: "600", fontSize: "20px"}}>
                        <li>1st prize 5K cash & voucher worth Rs/- 1000.</li>
                        <li>2nd prize 3k cash & voucher worth Rs/- 500.</li>
                        <li>3rd Prize 2k cash & voucher worth Rs/- 250.</li>
                        <li>4th & 5th 1k cash prize & voucher worth Rs/- 150.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}