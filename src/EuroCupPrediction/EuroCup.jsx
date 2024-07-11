import "../css/EuroCup.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Links from "../assets/Links";
export default function EuroCup(){

    const [value, setValue] = useState();
    const navigate = useNavigate();
    const [link, setLink] = useState("");
    useEffect(() => {
      let number = Math.floor(Math.random() * 3);
      setLink(Links[number]);
    }, []);
    function addInstaUsername() {
        localStorage.setItem("SyvarEuroInstaId", value);
        navigate("/eurocup-prediction");
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' 
          });
    },[])
    return(
        <div>
            <div className="eurocup-heading">
                <div className="eurocup-main-heading">Predict And Win</div>
                <div className="eurocup-sub-heading">Let's win exciting prizes</div>
            </div>
            <div className="eurocup-prediction-participation">
                <div className="eurocup-column">
                
                {/* <div className="eurocup-heading1">
                    Predict and Win - Round 2 has been closed 
                </div>
                <div className="eurocupDesc">
                    Be ready for Round 3
                </div>
                 */}

                    <div className="eurocup-heading2">To Participate</div>
                    <ul className="eurocup-unordered-list">
                        <li>Follow us on our instagram</li>
                        <li>Mention 3 friends in post related to the prediction</li>
                        <li>Share the prediction post on your story for 24 hours</li>
                    </ul>
                    <div className="eurocup-enter-username">Enter your instagram username</div>
                    <input className="eurocup-input-username" placeholder="Enter your insta username" onChange={(event) => {
                        setValue(event.target.value)}} value={value}/> 
                   
                  
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
            <div className="eurocup-prediction-rules">
                <div className="prediction-rules-title">
                    Prediction Rules
                </div>
                <div className="prediction-rules">
                    The prediction will be divided into three rounds, with each round awarding points for right predictions. After each round, we will disclose the top 10 players with the highest scores.
                    <br /><br />
                    Winner will be declared after adding up the points of the all the rounds.
                    <br /><br />
                    <div className="prediction-rules-title1">
                        First Round: The General Bracket Prediction
                    </div>
                    <div className="prediction-rules-title2">
                        Event Duration: 4th July to 5th July 
                    </div>
                    In this round, you will predict the full EURO CUP 2024 playoff bracket. For each correct prediction, you will gain 1 point. In this round, you can gain a total of 10 points.
                    <br /><br />
                    <div className="prediction-rules-title1">
                        Second Round: The Second Chance
                    </div>
                    <div className="prediction-rules-title2">
                        Event Duration: 7th July to 9th July  
                    </div>
                    Even if you to fail to predict for the first round, you have a second chance to redeem yourself. Each participants can forecast the score, winner, and penalty probability of each semifinal game. One correct prediction wins you 2 points in this match. Participants can receive a total of 12 points from this round.
                    <br /><br />
                    <div className="prediction-rules-title1">
                        Third Round: The Final Round 
                    </div>
                    <div className="prediction-rules-title2">
                        Event Duration: 11th July to 14th July
                    </div>
                    This is the final barrier you must overcome. You will predict the winner, goals, player of the match, and penalty probability of the final match, with each successful prediction earning you 4 points. Participants can earn a total of 16 points by winning it all or risk losing it all.
                    <br /><br />
                    Remember, just because you lost the first round does not mean you are out of the Prediction: it is only the beginning.
                </div>
            </div>
            {/* <div className="predict-rounds">

            </div> */}
        </div>
    );
}