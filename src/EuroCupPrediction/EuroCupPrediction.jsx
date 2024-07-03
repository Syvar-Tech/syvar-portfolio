import "../css/EuroCup.css";
import "../Navbar/navbar.scss";
import uefa from "../../public/images/eurocup-uefa-logo.png";
import England from "./Flags/England.jsx";
import Switzerland from "./Flags/Switzerland.jsx";
import Netherlands from "./Flags/Netherlands.jsx";
import Turkey from "./Flags/Turkey.jsx";
import Spain from "./Flags/Spain.jsx";
import Germany from "./Flags/Germany.jsx";
import Portugal from "./Flags/Portugal.jsx";
import France from "./Flags/France.jsx";
import TBD from "./Flags/TBD.jsx";
import { useEffect, useState, useRef } from "react";
import { useAnimate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EuroCupPrediction() {

    useEffect(() => {
        if(localStorage.getItem("SyvarEuroInstaId") == null || localStorage.getItem("SyvarEuroInstaId") == "undefined" ||  localStorage.getItem("SyvarEuroInstaId") == undefined) {
            navigate("/eurocup");
        }
    },[])

    const navigate = useNavigate();

    const [winnerTeam, setWinnerTeam] = useState({
        instagram: localStorage.getItem("SyvarEuroInstaId"),
        quaterfinalAWinner: "",
        quaterfinalBWinner: "",
        quaterfinalCWinner: "",
        quaterfinalDWinner: "",
        SemifinalAWinner: "",
        SemifinalBWinner: "",
        finalWinner: "",
    });

    const [winnerTeamFlag, setWinnerTeamFlag] = useState({
        quaterfinalAWinner: "",
        quaterfinalBWinner: "",
        quaterfinalCWinner: "",
        quaterfinalDWinner: "",
        SemifinalAWinner: "",
        SemifinalBWinner: "",
        finalWinner: "",
    });

    function submitPrediction() {
        axios.post('https://syvar.com.np/api/predict',
            winnerTeam
        )
          .then((response) => {
            console.log(response);
            localStorage.removeItem("SyvarEuroInstaId");
            navigate("/Thank-you")
          }, (error) => {
            console.log(error);
          });
    }


    function selectTeam(group, country, countryFlag) {
        switch(group) {
            case "groupA" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalAWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalAWinner: countryFlag
                    }
                })
            }
            break;
            case "groupB" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalBWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalBWinner: countryFlag
                    }
                })
            }
            break;
            case "groupC" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalCWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalCWinner: countryFlag
                    }
                })
            }
            break;
            case "groupD" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalDWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        quaterfinalDWinner: countryFlag
                    }
                })
            }
            break;
            case "groupE" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        SemifinalAWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        SemifinalAWinner: countryFlag
                    }
                })
            }
            break;
            case "groupF" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        SemifinalBWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        SemifinalBWinner: countryFlag
                    }
                })
            }
            break;
            case "groupG" : {
                setWinnerTeam((prevValue) => {
                    return {
                        ...prevValue,
                        finalWinner: country
                    }
                }),
                setWinnerTeamFlag((prevValue) => {
                    return {
                        ...prevValue,
                        finalWinner: countryFlag
                    }
                })
            }
            break;
            default:
                break;
        }
    }

    const [scope, animate] = useAnimate();

    const handleHover = () => {
        animate(".rock-start-button-container", { scale: 1.1 });
        animate(".rock-start-button-initial", { y: -100 });
        animate(".rock-start-button-hovered", { opacity: 1, y: 0 });
    };

    const handleOut = () => {
        animate(".rock-start-button-container", { scale: 1 });
        animate(".rock-start-button-initial", { y: 0 });
        animate(".rock-start-button-hovered", { opacity: 0, y: 100 });
    };

    useEffect(() => {
        console.log(winnerTeam);
    },[])

    return (
        <div style={{marginBottom: "40px"}}>
            <div className="eurocup-heading">
                <div className="eurocup-main-heading">Predict And Win - Round 1</div>
                <div className="eurocup-sub-heading">Let's win exciting gift hampers & prizes</div>
            </div>
            <div className="eurocup-uefa">
                <img className="uefa-image" src={uefa} alt="UEFA"/>
                <div className="eurocup-2024">EURO 2024</div>
                <div className="eurocup-2024-sub-title">Prediction before 5 July, 9:00 PM </div>
            </div>
            <div className="eurocup-prediction">
                <div className="round-container">
                    <div className="match-container" id="groupA">
                        <div className="team-div" onClick={() => selectTeam("groupA","England",England)}><div className="round-title">Quarter-final</div><England />&nbsp;&nbsp;&nbsp;England</div>
                        <div className="team-separator"></div>
                        <div className="team-div" onClick={() => selectTeam("groupA","Switzerland",Switzerland)}><Switzerland />&nbsp;&nbsp;&nbsp;Switzerland</div>
                        <div className="golden-line" style={{top: "16.66%", transform: "translateY(-16.66%)"}}></div>
                        <div className="golden-line-vertical" style={{top: "16.5%", transform: "translateY(-16.5%) rotate(90deg)"}}></div>
                    </div>
                    <div className="match-container" id="groupB">
                        <div className="team-div" onClick={() => selectTeam("groupB","Netherlands",Netherlands)}><Netherlands />&nbsp;&nbsp;&nbsp;Netherlands</div>
                        <div className="team-separator"></div>
                        <div className="team-div" onClick={() => selectTeam("groupB","Turkey",Turkey)}><Turkey />&nbsp;&nbsp;&nbsp;Turkey</div>
                        <div className="golden-line" style={{top: "38.88%", transform: "translateY(-38.88%)"}}></div>
                        <div className="golden-line-vertical" style={{top: "38.72%", transform: "translateY(-38.72%) rotate(-90deg)"}}></div>
                    </div>
                    <div className="match-container" id="groupC">
                        <div className="team-div" onClick={() => selectTeam("groupC","Spain",Spain)}><Spain />&nbsp;&nbsp;&nbsp;Spain</div>
                        <div className="team-separator"></div>
                        <div className="team-div" onClick={() => selectTeam("groupC","Germany",Germany)}><Germany />&nbsp;&nbsp;&nbsp;Germany</div>
                        <div className="golden-line" style={{top: "61.11%", transform: "translateY(-61.11%)"}}></div>
                        <div className="golden-line-vertical" style={{top: "60.95%", transform: "translateY(-60.95%) rotate(90deg)"}}></div>
                    </div>
                    <div className="match-container" id="groupD">
                        <div className="team-div" onClick={() => selectTeam("groupD","Portugal",Portugal)}><Portugal />&nbsp;&nbsp;&nbsp;Portugal</div>
                        <div className="team-separator"></div>
                        <div className="team-div" onClick={() => selectTeam("groupD","France",France)}><France />&nbsp;&nbsp;&nbsp;France</div>
                        <div className="golden-line" style={{top: "83.33%", transform: "translateY(-83.33%)"}}></div>
                        <div className="golden-line-vertical" style={{top: "83.17%", transform: "translateY(-83.17%) rotate(-90deg)"}}></div>
                    </div>
                </div>
                <div className="round-container" style={{justifyContent: "center"}}>
                    <div className="match-container" id="groupE">
                        <div className="team-div"><div className="round-title">Semi-final</div>
                            {winnerTeam.quaterfinalAWinner !== "" ? 
                                <div className="tbd-container" onClick={() => selectTeam("groupE",winnerTeam.quaterfinalAWinner,winnerTeamFlag.quaterfinalAWinner)}>
                                    <winnerTeamFlag.quaterfinalAWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.quaterfinalAWinner}
                                </div>
                            : 
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                            
                        </div>
                        <div className="team-separator"></div>
                        <div className="team-div">
                            {winnerTeam.quaterfinalBWinner !== "" ? 
                                <div className="tbd-container" onClick={() => selectTeam("groupE",winnerTeam.quaterfinalBWinner,winnerTeamFlag.quaterfinalBWinner)}>
                                    <winnerTeamFlag.quaterfinalBWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.quaterfinalBWinner}
                                </div>
                                :
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                        </div>
                        <div className="golden-line" style={{top: "27.77%", transform: "translateY(-27.77%)"}}></div>
                        <div className="golden-line-reverse" style={{top: "27.77%", transform: "translateY(-27.77%)"}}></div>
                        <div className="golden-line-vertical" style={{top: "27.61%", transform: "translateY(-27.61%) rotate(90deg)", width:"138px"}}></div>
                    </div>
                    <div className="match-container" style={{margin: "69px 0"}}>
                        <div className="team-div" style={{backgroundColor: "transparent"}}></div>
                        <div className="team-separator" style={{backgroundColor: "transparent"}}></div>
                        <div className="team-div" style={{backgroundColor: "transparent"}}></div>
                    </div>
                    <div className="match-container" id="groupF">
                        <div className="team-div">
                        {winnerTeam.quaterfinalCWinner !== "" ? 
                                <div className="tbd-container" onClick={() => selectTeam("groupF",winnerTeam.quaterfinalCWinner,winnerTeamFlag.quaterfinalCWinner)}>
                                    <winnerTeamFlag.quaterfinalCWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.quaterfinalCWinner}
                                </div>
                                : 
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                        </div>
                        <div className="team-separator"></div>
                        <div className="team-div" onClick={() => selectTeam("groupF",winnerTeam.quaterfinalDWinner,winnerTeamFlag.quaterfinalDWinner)}>
                            {winnerTeam.quaterfinalDWinner !== "" ? 
                                <div className="tbd-container">
                                    <winnerTeamFlag.quaterfinalDWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.quaterfinalDWinner}
                                </div>
                                : 
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                        </div>
                        <div className="golden-line" style={{top: "72.22%", transform: "translateY(-72.22%)"}}></div>
                        <div className="golden-line-reverse" style={{top: "72.22%", transform: "translateY(-72.22%)"}}></div>
                        <div className="golden-line-vertical" style={{top: "72.06%", transform: "translateY(-72.06%) rotate(-90deg)", width:"138px"}}></div>
                    </div>
                </div>
                <div className="round-container">
                    <div className="match-container" id="groupG">
                        <div className="team-div"><div className="round-title">Final</div>
                            {winnerTeam.SemifinalAWinner !== "" ? 
                                <div className="tbd-container" onClick={() => selectTeam("groupG",winnerTeam.SemifinalAWinner,winnerTeamFlag.SemifinalAWinner)}>
                                    <winnerTeamFlag.SemifinalAWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.SemifinalAWinner}
                                </div>
                                : 
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                        </div>
                        <div className="team-separator"></div>
                        <div className="team-div">
                            {winnerTeam.SemifinalBWinner !== "" ? 
                                <div className="tbd-container" onClick={() => selectTeam("groupG",winnerTeam.SemifinalBWinner,winnerTeamFlag.SemifinalBWinner)}>
                                    <winnerTeamFlag.SemifinalBWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.SemifinalBWinner}
                                </div>
                                : 
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                        </div>
                        <div className="golden-line" style={{top: "50%", transform: "translateY(-50%)"}}></div>
                        <div className="golden-line-reverse" style={{top: "50%", transform: "translateY(-50%)"}}></div>
                    </div>
                </div>
                <div className="round-container" id="groupH">
                    <div className="team-div"><div className="round-title">Winner</div>
                            {winnerTeam.finalWinner !== "" ? 
                                <div className="tbd-container">
                                    <winnerTeamFlag.finalWinner />&nbsp;&nbsp;&nbsp;{winnerTeam.finalWinner}
                                </div>
                                : 
                                <div className="tbd-container">
                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                </div>
                            }
                    </div>
                    <div className="golden-line-reverse" style={{top: "50%", transform: "translateY(-50%)"}}></div>
                </div>
                
                {/* <div className="rock-header">
                <motion.div
            ref={scope}
            id="btn"
            initial={{
              y: 0,
            }}
            animate={window.scrollY > 0 ? { y: -100 } : {}}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact">
              <div
                className="rock-start-button-container"
                onMouseLeave={handleOut}
                onMouseEnter={handleHover}
              >
                <motion.span
                  className="rock-start-button-initial"
                  // initial={{
                  //   x: "-50%"
                  // }}
                >
                  Submit
                </motion.span>
                <motion.span
                  className="rock-start-button-hovered"
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                >
                  Submit
                </motion.span>
              </div>
            </a>
          </motion.div>

          </div> */}
            </div>
            <div style={{width: "100%", height: "100px", position: "relative"}}>
                <div to="/" onClick={() => submitPrediction()} style={{position: "absolute", top: "90%", left: "90%", transform: "translate(-100%, -100%)"}}>
                    <button className="eurocup-btn" >Submit</button>
                </div>
            </div>
        </div>
    );
}