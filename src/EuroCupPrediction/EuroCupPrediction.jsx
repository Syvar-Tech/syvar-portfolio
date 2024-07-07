import "../css/EuroCup.css";
import "../Navbar/navbar.scss";
import uefa from "../assets/eurocup-uefa-logo.png";
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

    const m1t1 = useRef();
    const m1t2 = useRef();
    const p1t1 = useRef();
    const p1t2 = useRef();

    const m2t1 = useRef();
    const m2t2 = useRef();
    const p2t1 = useRef();
    const p2t2 = useRef();

    useEffect(() => {
        if(localStorage.getItem("SyvarEuroInstaId") == null || localStorage.getItem("SyvarEuroInstaId") == "undefined" ||  localStorage.getItem("SyvarEuroInstaId") == undefined) {
            navigate("/eurocup");
        }
    },[])

    const [semiFinal, setSemiFinal] = useState({
        m1t1: "0",
        m1t2: "0",
        p1t1: "0",
        p1t2: "0",
        m2t1: "0",
        m2t2: "0",
        p2t1: "0",
        p2t2: "0",
    });

    const [semiWinner, setSemiWinner] = useState({
        m1Winner: "",
        m2Winner: "",
        m1WinnerFlag: "",
        m2WinnerFlag: "",
    })

    function selectGoal(event) {
        var name = event.target.name;
        var value = event.target.value;

        console.log(name,value);

        setSemiFinal((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleTeamClick(team) {
        // switch(team) {
        //     case team == "m1t1":
        //         document.getElementById("m1t1").click();
        //     break;
        //     case "m1t2":
        //         document.getElementById("m1t2").click();
        //     break;
        //     default:
        //         break;
        // }
    }

    const m1Team1 = "Spain";
    const m1Team2 = "France";
    const m2Team1 = "Netherlands";
    const m2Team2 = "England";

    const m1Team1Flag = Spain;
    const m1Team2Flag = France;
    const m2Team1Flag = Netherlands;
    const m2Team2Flag = England;

    useEffect(() => {
        
        const m1t1 = parseInt(semiFinal.m1t1);
        const m1t2 = parseInt(semiFinal.m1t2);
        const m2t1 = parseInt(semiFinal.m2t1);
        const m2t2 = parseInt(semiFinal.m2t2);
        
        const p1t1 = parseInt(semiFinal.p1t1);
        const p1t2 = parseInt(semiFinal.p1t2);
        const p2t1 = parseInt(semiFinal.p2t1);
        const p2t2 = parseInt(semiFinal.p2t2);

        if (m1t1 > m1t2) {
            setSemiWinner((prevValue) => {
                return {
                    ...prevValue,
                    m1Winner: m1Team1,
                    m1WinnerFlag: m1Team1Flag,
                }
            })
            setSemiFinal((prevValue) => {
                return {
                    ...prevValue,
                    p1t1: "0",
                    p1t2: "0",
                }
            })
        } else if (m1t1 < m1t2) {
            setSemiWinner((prevValue) => {
                return {
                    ...prevValue,
                    m1Winner: m1Team2,
                    m1WinnerFlag: m1Team2Flag,
                }
            })
            setSemiFinal((prevValue) => {
                return {
                    ...prevValue,
                    p1t1: "0",
                    p1t2: "0",
                }
            })
        } 
        else {

            if (p1t1 > p1t2) {
                setSemiWinner((prevValue) => {
                    return {
                        ...prevValue,
                        m1Winner: m1Team1,
                        m1WinnerFlag: m1Team1Flag,
                    }
                })
            }

            else if (p1t1 < p1t2) {
                setSemiWinner((prevValue) => {
                    return {
                        ...prevValue,
                        m1Winner: m1Team2,
                        m1WinnerFlag: m1Team2Flag,
                    }
                })
            }

            else {
                setSemiWinner((prevValue) => {
                    return {
                        ...prevValue,
                        m1Winner: "",
                        m1WinnerFlag: "",
                    }
                })
            }
        }

        if (m2t1 > m2t2) {
            setSemiWinner((prevValue) => {
                return {
                    ...prevValue,
                    m2Winner: m2Team1,
                    m2WinnerFlag: m2Team1Flag,
                }
            })
            setSemiFinal((prevValue) => {
                return {
                    ...prevValue,
                    p2t1: "0",
                    p2t2: "0",
                }
            })
        } else if (m2t1 < m2t2) {
            setSemiWinner((prevValue) => {
                return {
                    ...prevValue,
                    m2Winner: m2Team2,
                    m2WinnerFlag: m2Team2Flag,
                }
            })
            setSemiFinal((prevValue) => {
                return {
                    ...prevValue,
                    p2t1: "0",
                    p2t2: "0",
                }
            })
        } 
        else {

            if (p2t1 > p2t2) {
                setSemiWinner((prevValue) => {
                    return {
                        ...prevValue,
                        m2Winner: m2Team1,
                        m2WinnerFlag: m2Team1Flag,
                    }
                })
            }

            else if (p2t1 < p2t2) {
                setSemiWinner((prevValue) => {
                    return {
                        ...prevValue,
                        m2Winner: m2Team2,
                        m2WinnerFlag: m2Team2Flag,
                    }
                })
            }

            else {
                setSemiWinner((prevValue) => {
                    return {
                        ...prevValue,
                        m2Winner: "",
                        m2WinnerFlag: "",
                    }
                })
            }
        }
    },[semiFinal])

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
        SemifinalATeam1Goal: "",
        SemifinalATeam2Goal: "",
        SemifinalATeam1Penalty: "",
        SemifinalATeam2Penalty: "",
        SemifinalBTeam1Goal: "",
        SemifinalBTeam2Goal: "",
        SemifinalBTeam1Penalty: "",
        SemifinalBTeam2Penalty: "",
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

    // function submitPrediction() {
    //     // https://syvar.com.np/api/predict
    //     axios.post('http://192.168.101.11:4000/api/predict',
    //         winnerTeam
    //     )
    //       .then((response) => {
    //         console.log(response);
    //         localStorage.removeItem("SyvarEuroInstaId");
    //         navigate("/Thank-you")
    //       }, (error) => {
    //         console.log(error);
    //       });
    // }

    function submitSemiFinalPrediction() {
        var submitSemiFinal;
        if (semiWinner.m1Winner !== "" && semiWinner.m2Winner !== "") {
            submitSemiFinal = {
                instagram: localStorage.getItem("SyvarEuroInstaId"),
                SemifinalATeam1Goal: semiFinal.m1t1.toString(),
                SemifinalATeam2Goal: semiFinal.m1t2.toString(),
                SemifinalATeam1Penalty: semiFinal.p1t1.toString(),
                SemifinalATeam2Penalty: semiFinal.p1t2.toString(),
                SemifinalBTeam1Goal: semiFinal.m2t1.toString(),
                SemifinalBTeam2Goal: semiFinal.m2t2.toString(),
                SemifinalBTeam1Penalty: semiFinal.p2t1.toString(),
                SemifinalBTeam2Penalty: semiFinal.p2t2.toString(),
                stage2SemifinalAWinner: semiWinner.m1Winner,
                stage2SemifinalBWinner: semiWinner.m2Winner
            }
        }

        else {
            alert("Winners are not selected.")
        }

        console.log(submitSemiFinal);

        //https://syvar.com.np/api/predict
        axios.post('http://localhost:4000/api/predict',
            submitSemiFinal
        )
          .then((response) => {
            console.log(response);
            localStorage.removeItem("SyvarEuroInstaId");
            navigate("/thank-you")
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
            {/* <div className="eurocup-heading">
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
            </div>
            <div style={{width: "100%", height: "100px", position: "relative"}}>
                <div to="/" onClick={() => submitPrediction()} style={{position: "absolute", top: "90%", left: "90%", transform: "translate(-100%, -100%)"}}>
                    <button className="eurocup-btn" >Submit</button>
                </div>
            </div> */}
            <div className="semifinals-prediction">
                    <div className="semifinals-title">
                        Semifinals
                    </div>
                    <div className="semifinals-goals-container">
                        <div className="semifinals-match">
                            <div className="match-goals">
                                <div className="match-title">
                                    Match 1
                                </div>
                                <div className="match-prediction">
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => m1t1.current.focus()}><Spain />&nbsp;&nbsp;&nbsp;Spain</div>
                                    <div className="predict-numbers">
                                        <input className="input-goals" inputMode="numeric" ref={m1t1} name="m1t1" value={semiFinal.m1t1} onChange={(event) => selectGoal(event)}/>
                                        <div className="input-separator"></div>
                                        <input className="input-goals" inputMode="numeric" ref={m1t2} name="m1t2" value={semiFinal.m1t2} onChange={(event) => selectGoal(event)}/>
                                    </div>
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => m1t2.current.focus()}><France />&nbsp;&nbsp;&nbsp;France</div>
                                </div>
                            </div>
                            <div className="match-penalty">
                                <div className="match-title" style={{color: "#EC221F"}}>
                                    Match 1 - Penalty
                                </div>
                                <div className="match-prediction">
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => p1t1.current.focus()}><Spain />&nbsp;&nbsp;&nbsp;Spain</div>
                                    <div className="predict-numbers">
                                        <input className="input-goals" inputMode="numeric" ref={p1t1} name="p1t1" value={semiFinal.p1t1} onChange={(event) => selectGoal(event)} disabled={semiFinal.m1t1 == semiFinal.m1t2 ? false : true}/>
                                        <div className="input-separator"></div>
                                        <input className="input-goals" inputMode="numeric" ref={p1t2} name="p1t2" value={semiFinal.p1t2} onChange={(event) => selectGoal(event)} disabled={semiFinal.m1t1 == semiFinal.m1t2 ? false : true}/>
                                    </div>
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => p1t2.current.focus()}><France />&nbsp;&nbsp;&nbsp;France</div>
                                </div>
                            </div>
                            <div className="match-winner">
                                <div className="match-title" style={{color: "#00FF77", textAlign: "center"}}>
                                    Winner
                                </div>
                                <div className="match-prediction">
                                        {
                                            semiWinner.m1Winner === "" ? 
                                                <div className="team-div semi-team-div">
                                                    <TBD />&nbsp;&nbsp;&nbsp;TBD
                                                </div>
                                            :
                                            <div className="team-div semi-team-div">
                                                <semiWinner.m1WinnerFlag />&nbsp;&nbsp;&nbsp;{semiWinner.m1Winner}
                                            </div>
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="semifinals-goals-container">
                        <div className="semifinals-match">
                            <div className="match-goals">
                                <div className="match-title">
                                    Match 2
                                </div>
                                <div className="match-prediction">
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => m2t1.current.focus()}><Netherlands />&nbsp;&nbsp;&nbsp;Netherlands</div>
                                    <div className="predict-numbers">
                                        <input className="input-goals" inputMode="numeric" ref={m2t1} name="m2t1" value={semiFinal.m2t1} onChange={(event) => selectGoal(event)}/>
                                        <div className="input-separator"></div>
                                        <input className="input-goals" inputMode="numeric" ref={m2t2} name="m2t2" value={semiFinal.m2t2} onChange={(event) => selectGoal(event)}/>
                                    </div>
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => m2t2.current.focus()}><England />&nbsp;&nbsp;&nbsp;England</div>
                                </div>
                            </div>
                            <div className="match-penalty">
                                <div className="match-title" style={{color: "#EC221F"}}>
                                    Match 2 - Penalty
                                </div>
                                <div className="match-prediction">
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => p2t1.current.focus()}><Netherlands />&nbsp;&nbsp;&nbsp;Netherlands</div>
                                    <div className="predict-numbers">
                                        <input className="input-goals" inputMode="numeric" ref={p2t1} name="p2t1" value={semiFinal.p2t1} onChange={(event) => selectGoal(event)} disabled={semiFinal.m2t1 == semiFinal.m2t2 ? false : true}/>
                                        <div className="input-separator"></div>
                                        <input className="input-goals" inputMode="numeric" ref={p2t2} name="p2t2" value={semiFinal.p2t2} onChange={(event) => selectGoal(event)} disabled={semiFinal.m2t1 == semiFinal.m2t2 ? false : true}/>
                                    </div>
                                    <div className="team-div semi-team-div" style={{cursor: "default"}} onClick={() => p2t2.current.focus()}><England />&nbsp;&nbsp;&nbsp;England</div>
                                </div>
                            </div>
                            <div className="match-winner">
                                <div className="match-title" style={{color: "#00FF77", textAlign: "center"}}>
                                    Winner
                                </div>
                                <div className="match-prediction">
                                    {
                                        semiWinner.m2Winner === "" ? 
                                            <div className="team-div semi-team-div">
                                                <TBD />&nbsp;&nbsp;&nbsp;TBD
                                            </div>
                                        :
                                        <div className="team-div semi-team-div">
                                            <semiWinner.m2WinnerFlag />&nbsp;&nbsp;&nbsp;{semiWinner.m2Winner}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div style={{width: "100%", height: "100px", position: "relative"}}>
                <div to="/" className="prediction-submit-position">
                    <button className="eurocup-btn" onClick={submitSemiFinalPrediction}>Submit</button>
                </div>
            </div>
        </div>
    );
}