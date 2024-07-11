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
import "./round2.css";
import CUP from "./Flags/CUP.jsx";

export default function EuroCupPrediction() {
  const names = [
    {
      id: 0,
      name: "Yodinkoirala.75",
      points: "4",
    },
    {
      id: 1,
      name: "sahil_alam2020",
      points: "4",
    },
    {
      id: 2,
      name: "samyak_mdhr",
      points: "4",
    },
    {
      id: 3,
      name: "nirmala_pokharel_44",
      points: "4",
    },
    {
      id: 4,
      name: "somadonn",
      points: "4",
    },
    {
      id: 5,
      name: "awanielogy",
      points: "4",
    },
    {
      id: 6,
      name: "iyushh__ksiii01",
      points: "4",
    },
    {
      id: 7,
      name: "soya.stha",
      points: "4",
    },
    {
      id: 8,
      name: "ritwiz14",
      points: "4",
    },
    {
      id: 9,
      name: "karki_suzan17",
      points: "4",
    },
  ];
    const [nameList, setNameList] = useState([]);
    function fetchName() {
      axios
        .get("https://syvar.com.np/api/getPredictions")
        .then((res) => {
          console.log(res.data.data);
          setNameList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    useEffect(() => {
      fetchName();
    }, []);

  const m1t1 = useRef();
  const m1t2 = useRef();
  const p1t1 = useRef();
  const p1t2 = useRef();

  const m2t1 = useRef();
  const m2t2 = useRef();
  const p2t1 = useRef();
  const p2t2 = useRef();


  useEffect(() => {
    if (
      localStorage.getItem("SyvarEuroInstaId") == null ||
      localStorage.getItem("SyvarEuroInstaId") == "undefined" ||
      localStorage.getItem("SyvarEuroInstaId") == undefined
    ) {
      navigate("/eurocup");
    }
  }, []);

  const [semiFinal, setSemiFinal] = useState({
    m1t1: "0",
    m1t2: "0",

    // m2t1: "0",
    // m2t2: "0",
  });
  const [mvp,setmvp] = useState("")
  const [semiPenalty, setSemiPenalty] = useState({
    p1t1: "0",
    p1t2: "0",

    // p2t1: "0",
    // p2t2: "0",
  });
  const [semiWinner, setSemiWinner] = useState({
    m1Winner: "",
    // m2Winner: "",
    m1WinnerFlag: "",
    // m2WinnerFlag: "",
  });

  function selectGoal(event) {
    var name = event.target.name;
    var value = event.target.value;

    // console.log(name, value);

    if (
      name === "m1t1" ||
      name == "m1t2"
      // || name === "m2t1" ||
      // name == "m2t2"
    ) {
      setSemiFinal((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
        };
      });
    } else {
      setSemiPenalty((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
        };
      });
    }
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
  const m1Team2 = "England";
  // const m2Team1 = "Netherlands";
  // const m2Team2 = "England";




  const m1Team1Flag = Spain;
  const m1Team2Flag = England;
  // const m2Team1Flag = Netherlands;
  // const m2Team2Flag = England;

  useEffect(() => {
    const m1t1 = parseInt(semiFinal.m1t1);
    const m1t2 = parseInt(semiFinal.m1t2);
    // const m2t1 = parseInt(semiFinal.m2t1);
    // const m2t2 = parseInt(semiFinal.m2t2);

    const p1t1 = parseInt(semiPenalty.p1t1);
    const p1t2 = parseInt(semiPenalty.p1t2);
    // const p2t1 = parseInt(semiPenalty.p2t1);
    // const p2t2 = parseInt(semiPenalty.p2t2);






    if (m1t1 > m1t2) {
      setSemiWinner((prevValue) => {
        return {
          ...prevValue,
          m1Winner: m1Team1,
          m1WinnerFlag: m1Team1Flag,
        };
      });
      setSemiPenalty((prevValue) => {
        return {
          ...prevValue,
          p1t1: "0",
          p1t2: "0",
        };
      });
    } else if (m1t1 < m1t2) {
      setSemiWinner((prevValue) => {
        return {
          ...prevValue,
          m1Winner: m1Team2,
          m1WinnerFlag: m1Team2Flag,
        };
      });
      setSemiPenalty((prevValue) => {
        return {
          ...prevValue,
          p1t1: "0",
          p1t2: "0",
        };
      });
    } else {
      if (p1t1 > p1t2) {
        setSemiWinner((prevValue) => {
          return {
            ...prevValue,
            m1Winner: m1Team1,
            m1WinnerFlag: m1Team1Flag,
          };
        });
      } else if (p1t1 < p1t2) {
        setSemiWinner((prevValue) => {
          return {
            ...prevValue,
            m1Winner: m1Team2,
            m1WinnerFlag: m1Team2Flag,
          };
        });
      } else {
        setSemiWinner((prevValue) => {
          return {
            ...prevValue,
            m1Winner: "",
            m1WinnerFlag: "",
          };
        });
      }
    }

    // // if (m2t1 > m2t2) {
    // //   setSemiWinner((prevValue) => {
    // //     return {
    // //       ...prevValue,
    // //       m2Winner: m2Team1,
    // //       m2WinnerFlag: m2Team1Flag,
    // //     };
    // //   });
    // //   setSemiPenalty((prevValue) => {
    // //     return {
    // //       ...prevValue,
    // //       p2t1: "0",
    // //       p2t2: "0",
    // //     };
    // //   });
    // // } else if (m2t1 < m2t2) {
    // //   setSemiWinner((prevValue) => {
    // //     return {
    // //       ...prevValue,
    // //       m2Winner: m2Team2,
    // //       m2WinnerFlag: m2Team2Flag,
    // //     };
    // //   });
    // //   setSemiPenalty((prevValue) => {
    // //     return {
    // //       ...prevValue,
    // //       p2t1: "0",
    // //       p2t2: "0",
    // //     };
    // //   });
    // // } else {
    // //   if (p2t1 > p2t2) {
    // //     setSemiWinner((prevValue) => {
    // //       return {
    // //         ...prevValue,
    // //         m2Winner: m2Team1,
    // //         m2WinnerFlag: m2Team1Flag,
    // //       };
    // //     });
    // //   } else if (p2t1 < p2t2) {
    // //     setSemiWinner((prevValue) => {
    // //       return {
    // //         ...prevValue,
    // //         m2Winner: m2Team2,
    // //         m2WinnerFlag: m2Team2Flag,
    // //       };
    // //     });
    // //   } else {
    // //     setSemiWinner((prevValue) => {
    // //       return {
    // //         ...prevValue,
    // //         m2Winner: "",
    // //         m2WinnerFlag: "",
    // //       };
    // //     });
    // //   }
    // }
  }, [semiFinal, semiPenalty]);

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

    if (semiWinner.m1Winner !== "") {
      submitSemiFinal = {
        FinalMvp: mvp,
        instagram: localStorage.getItem("SyvarEuroInstaId"),
        FinalSpainGoal: semiFinal.m1t1.toString(),
        FinalEnglandGoal: semiFinal.m1t2.toString(),
        FinalSpainPenaltyGoal: semiPenalty.p1t1.toString(),
        FinalEnglandPnelatyGoal: semiPenalty.p1t2.toString(),
        Stage3FinalWinner: semiWinner.m1Winner,
        // SemifinalBTeam1Goal: semiFinal.m2t1.toString(),
        // SemifinalBTeam2Goal: semiFinal.m2t2.toString(),
        // SemifinalBTeam1Penalty: semiPenalty.p2t1.toString(),
        // SemifinalBTeam2Penalty: semiPenalty.p2t2.toString(),
        // stage2SemifinalBWinner: semiWinner.m2Winner,
      };
    } else {
      alert("Winners are not selected.");
    }
console.log(submitSemiFinal);
    // console.log(submitSemiFinal);

    //https://syvar.com.np/api/predict
    axios.post("https://syvar.com.np/api/predict", submitSemiFinal).then(
      (response) => {
        // console.log(response);
        localStorage.removeItem("SyvarEuroInstaId");
        navigate("/thank-you");
      },
      (error) => {
        // console.log(error);
      }
    );
  }

  function selectTeam(group, country, countryFlag) {
    switch (group) {
      case "groupA":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              quaterfinalAWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                quaterfinalAWinner: countryFlag,
              };
            });
        }
        break;
      case "groupB":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              quaterfinalBWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                quaterfinalBWinner: countryFlag,
              };
            });
        }
        break;
      case "groupC":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              quaterfinalCWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                quaterfinalCWinner: countryFlag,
              };
            });
        }
        break;
      case "groupD":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              quaterfinalDWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                quaterfinalDWinner: countryFlag,
              };
            });
        }
        break;
      case "groupE":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              SemifinalAWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                SemifinalAWinner: countryFlag,
              };
            });
        }
        break;
      case "groupF":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              SemifinalBWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                SemifinalBWinner: countryFlag,
              };
            });
        }
        break;
      case "groupG":
        {
          setWinnerTeam((prevValue) => {
            return {
              ...prevValue,
              finalWinner: country,
            };
          }),
            setWinnerTeamFlag((prevValue) => {
              return {
                ...prevValue,
                finalWinner: countryFlag,
              };
            });
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

  //   useEffect(() => {
  //     console.log(winnerTeam);
  //   }, []);

  return (
    <div style={{ marginBottom: "40px" }}>
      <div className="syk-r2-main-container">
        <div className="eurocup-heading">
          <div className="eurocup-main-heading">Predict And Win - Round 2</div>
        </div>

        <div className="syk-r2-mid-section">
          <div className="syk-r2-mid-left">
            <div className="syk-r2-mid-left-subhead">
              <p>Get ready !</p>
              <p>
                To show your <span>prediction</span> skills
              </p>
            </div>
            <div className="syk-r2-mid-left-rules">
              <div className="eurocup-heading2">Rules</div>
              <ul className="eurocup-unordered-list">
                <li>
                  Predict Goals - <span className="syk-pts-color">2 Pts </span>
                  <span className="syk-pts-small">per team</span>
                </li>
                <li>
                  Predict Goals in penalty -{" "}
                  <span className="syk-pts-color">2 Pts </span>
                  <span className="syk-pts-small">per game</span>
                </li>
                <li>
                  Predict match winner -{" "}
                  <span className="syk-pts-color">2 Pts </span>
                  {/* <span className="syk-pts-small">per match</span> */}
                </li>
                <li>
                  Predict Man of the Match -{" "}
                  <span className="syk-pts-color">2 Pts </span>
                  {/* <span className="syk-pts-small">per match</span> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="syright">
            <p className="syright-heading">
              <span>{star}</span>
              Round 1 Top Players{gold}
            </p>
            <table className="scoreTable">
              <thead className="tableHeading">
                <tr className="tableHeadrow">
                  <th className="tabletitle">No.</th>
                  <th className="tabletitle">Players</th>
                  <th className="tabletitle">Points</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {nameList.slice(0,10).map((data, index) => {
                  return (
                    <tr className="tableBodyRow">
                      <td className="tableBodypoints">{index + 1}</td>
                      <td className="tableBodypoints">{data.instagram}</td>
                      <td className="tableBodypoints">{data.points}</td>
                      <td className="crown">
                        {index === 0
                          ? gold
                          : index === 1
                            ? silver
                            : index <= 4
                              ? bronze
                              : ""}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="semifinals-prediction">
          <div className="semifinals-title">
            <p className="euroFinalCountry">
              <Spain className='flags' /> Spain
            </p>
            <p className="vs">
              VS
            </p>
            <p className="euroFinalCountry">
              <England className='flags' />England
            </p>
          </div>
          <div className="semifinals-goals-container">
            <div className="semifinals-match">
              <div className="match-goals">
                <div className="match-title">Final</div>
                <div className="match-prediction">
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => m1t1.current.focus()}
                  >
                    <Spain className='flags' />
                    &nbsp;&nbsp;&nbsp;Spain
                  </div>
                  <div className="predict-numbers">
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={m1t1}
                      name="m1t1"
                      value={semiFinal.m1t1}
                      onChange={(event) => selectGoal(event)}
                    />
                    <div className="input-separator"></div>
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={m1t2}
                      name="m1t2"
                      value={semiFinal.m1t2}
                      onChange={(event) => selectGoal(event)}
                    />
                  </div>
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => m1t2.current.focus()}
                  >
                    <England className='flags' />
                    &nbsp;&nbsp;&nbsp;England
                  </div>
                </div>
              </div>
              <div className="match-penalty">
                <div className="match-title" style={{ color: "#EC221F" }}>
                  Final - Penalty
                </div>
                <div className="match-prediction">
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => p1t1.current.focus()}
                  >
                    <Spain className='flags' />
                    &nbsp;&nbsp;&nbsp;Spain
                  </div>
                  <div className="predict-numbers">
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={p1t1}
                      name="p1t1"
                      value={semiPenalty.p1t1}
                      onChange={(event) => selectGoal(event)}
                      disabled={semiFinal.m1t1 == semiFinal.m1t2 ? false : true}
                    />
                    <div className="input-separator"></div>
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={p1t2}
                      name="p1t2"
                      value={semiPenalty.p1t2}
                      onChange={(event) => selectGoal(event)}
                      disabled={semiFinal.m1t1 == semiFinal.m1t2 ? false : true}
                    />
                  </div>
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => p1t2.current.focus()}
                  >
                    <England className='flags' />
                    &nbsp;&nbsp;&nbsp; England
                  </div>
                </div>
              </div>
              <div className="match-winner">
                <div
                  className="match-title"
                  style={{ color: "#00FF77", textAlign: "center" }}
                >
                  Champions
                </div>
                <div className="match-prediction">
                  {semiWinner.m1Winner === "" ? (
                    <div className="team-div semi-team-div">
                      <TBD />
                      &nbsp;&nbsp;&nbsp;TBD
                    </div>
                  ) : (
                    <div className="team-div semi-team-div">
                      <semiWinner.m1WinnerFlag className='flags' />
                      &nbsp;&nbsp;&nbsp;{semiWinner.m1Winner}
                    </div>
                  )}
                </div>
                <CUP className='cup' />
              </div>
            </div>
            
          </div>
          <div className="mvpcontainer">
                  <p className="mvcontainertitle">Guess The Man Of The Match</p>
                  <input type="text" name="mvp" id="mvp" placeholder="Enter the player name" value={mvp} className="mvpInput" onChange={(e)=>setmvp(e.target.value)} />
          </div>
          {/* <div className="semifinals-goals-container">
            <div className="semifinals-match">
              <div className="match-goals">
                <div className="match-title">Match 2</div>
                <div className="match-prediction">
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => m2t1.current.focus()}
                  >
                    <Netherlands />
                    &nbsp;&nbsp;&nbsp;Netherlands
                  </div>
                  <div className="predict-numbers">
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={m2t1}
                      name="m2t1"
                      value={semiFinal.m2t1}
                      onChange={(event) => selectGoal(event)}
                    />
                    <div className="input-separator"></div>
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={m2t2}
                      name="m2t2"
                      value={semiFinal.m2t2}
                      onChange={(event) => selectGoal(event)}
                    />
                  </div>
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => m2t2.current.focus()}
                  >
                    <England />
                    &nbsp;&nbsp;&nbsp;England
                  </div>
                </div>
              </div>
              <div className="match-penalty">
                <div className="match-title" style={{ color: "#EC221F" }}>
                  Match 2 - Penalty
                </div>
                <div className="match-prediction">
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => p2t1.current.focus()}
                  >
                    <Netherlands />
                    &nbsp;&nbsp;&nbsp;Netherlands
                  </div>
                  <div className="predict-numbers">
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={p2t1}
                      name="p2t1"
                      value={semiPenalty.p2t1}
                      onChange={(event) => selectGoal(event)}
                      disabled={semiFinal.m2t1 == semiFinal.m2t2 ? false : true}
                    />
                    <div className="input-separator"></div>
                    <input
                      type="number"
                      className="input-goals"
                      inputMode="numeric"
                      ref={p2t2}
                      name="p2t2"
                      value={semiPenalty.p2t2}
                      onChange={(event) => selectGoal(event)}
                      disabled={semiFinal.m2t1 == semiFinal.m2t2 ? false : true}
                    />
                  </div>
                  <div
                    className="team-div semi-team-div"
                    style={{ cursor: "default" }}
                    onClick={() => p2t2.current.focus()}
                  >
                    <England />
                    &nbsp;&nbsp;&nbsp;England
                  </div>
                </div>
              </div>
              <div className="match-winner">
                <div
                  className="match-title"
                  style={{ color: "#00FF77", textAlign: "center" }}
                >
                  Winner
                </div>
                <div className="match-prediction">
                  {semiWinner.m2Winner === "" ? (
                    <div className="team-div semi-team-div">
                      <TBD />
                      &nbsp;&nbsp;&nbsp;TBD
                    </div>
                  ) : (
                    <div className="team-div semi-team-div">
                      <semiWinner.m2WinnerFlag />
                      &nbsp;&nbsp;&nbsp;{semiWinner.m2Winner}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div style={{ width: "100%", height: "100px", position: "relative" }}>
          <div to="/" className="prediction-submit-position">
            <button className="eurocup-btn" onClick={submitSemiFinalPrediction}>
              Submit
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
}

const gold = (
  <svg
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="noto:crown">
      <path
        id="Vector"
        d="M12.5533 3.23699C12.8773 3.06184 13.1018 2.69223 13.1018 2.26324C13.1018 1.97664 12.9999 1.70178 12.8186 1.49912C12.6373 1.29647 12.3914 1.18262 12.1349 1.18262C11.8785 1.18262 11.6326 1.29647 11.4512 1.49912C11.2699 1.70178 11.168 1.97664 11.168 2.26324C11.168 2.69816 11.3978 3.07074 11.7285 3.24293C11.346 5.55855 10.759 7.28191 8.57422 7.65004C8.57422 7.65004 9.16258 10.9379 11.9145 10.9379C14.6663 10.9379 14.9452 7.68269 14.9452 7.68269C12.7127 7.81035 12.5241 4.67387 12.5533 3.23699Z"
        fill="#F19534"
      />
      <path
        id="Vector_2"
        d="M4.61719 3.23699C4.29313 3.06184 4.06867 2.69223 4.06867 2.26324C4.06867 1.97664 4.17054 1.70178 4.35186 1.49912C4.53319 1.29647 4.77912 1.18262 5.03555 1.18262C5.29198 1.18262 5.53791 1.29647 5.71923 1.49912C5.90056 1.70178 6.00242 1.97664 6.00242 2.26324C6.00242 2.69816 5.77266 3.07074 5.44195 3.24293C5.82445 5.55855 6.41148 7.28191 8.59625 7.65004C8.59625 7.65004 8.00789 10.9379 5.25602 10.9379C2.50414 10.9379 2.22656 7.68418 2.22656 7.68418C4.45781 7.81035 4.64641 4.67387 4.61719 3.23699Z"
        fill="#F19534"
      />
      <path
        id="Vector_3"
        d="M11.8789 10.9381C11.8909 10.9381 11.9028 10.9396 11.9148 10.9396C12.6731 10.9396 13.2429 10.6917 13.6705 10.334L11.8789 10.9381Z"
        fill="#FFCA28"
      />
      <path
        id="Vector_4"
        d="M15.8394 2.50241C15.3972 2.43561 14.9748 2.90616 14.8978 3.55038C14.85 3.95265 14.9469 4.32819 15.1342 4.57015L14.8154 6.0471C14.8154 6.0471 14.328 9.53686 11.8657 10.2256C9.89739 10.7763 9.18418 6.74921 9.01153 5.5053C9.38606 5.29749 9.64504 4.86702 9.64504 4.36679C9.64504 3.66468 9.13637 3.09616 8.50817 3.09616C7.87996 3.09616 7.37129 3.66468 7.37129 4.36679C7.37129 4.86999 7.63426 5.30491 8.01543 5.50976C7.87864 6.73733 7.27567 10.6308 5.15067 10.2241C2.99379 9.80999 2.05215 5.75022 1.83434 4.64585C2.09332 4.40835 2.23809 3.98976 2.18497 3.53999C2.10793 2.89429 1.65106 2.43116 1.16497 2.5039C0.678872 2.57663 0.348169 3.15851 0.4252 3.80272C0.480981 4.27179 0.738637 4.64436 1.06137 4.78538L2.75075 16.5164C2.75075 16.5164 4.22496 17.8182 8.50817 17.8182C12.7914 17.8182 14.2656 16.5164 14.2656 16.5164L15.9589 4.75421C16.2325 4.5939 16.4477 4.23319 16.5008 3.79085C16.5792 3.14515 16.283 2.56921 15.8394 2.50241Z"
        fill="#FFCA28"
      />
      <path
        id="Vector_5"
        d="M8.55922 14.8305C9.27365 14.8305 9.85281 14.0589 9.85281 13.1071C9.85281 12.1554 9.27365 11.3838 8.55922 11.3838C7.84479 11.3838 7.26562 12.1554 7.26562 13.1071C7.26562 14.0589 7.84479 14.8305 8.55922 14.8305Z"
        fill="#26A69A"
      />
      <path
        id="Vector_6"
        d="M8.55476 11.8095C8.60523 11.8719 8.65039 11.9862 8.55476 12.2088C8.45914 12.4315 7.94383 12.7328 7.84953 12.7937C7.75523 12.856 7.69281 12.8278 7.66359 12.8026C7.52414 12.6779 7.57726 12.3958 7.66757 12.2237C7.86148 11.8511 8.27187 11.4666 8.55476 11.8095Z"
        fill="#69F0AE"
      />
      <path
        id="Vector_7"
        d="M8.46391 13.7498C8.31781 13.8285 7.83836 14.0674 7.99641 14.351C8.08937 14.5187 8.28195 14.5899 8.45859 14.5988C8.63523 14.6078 8.80922 14.5454 8.96594 14.4549C9.70969 14.0244 9.76945 12.8933 9.62469 12.8072C9.47594 12.7181 9.375 12.9482 9.29797 13.0462C9.06374 13.3394 8.78038 13.5784 8.46391 13.7498Z"
        fill="#00796B"
      />
      <path
        id="Vector_8"
        d="M15.6843 11.6969C15.8915 10.4159 15.1211 10.0953 15.1211 10.0953C15.1211 10.0953 14.6244 9.99434 14.3907 11.4357C14.1569 12.8755 14.6536 12.9764 14.6536 12.9764C14.6536 12.9764 15.4757 12.9779 15.6843 11.6969Z"
        fill="#26A69A"
      />
      <path
        id="Vector_9"
        d="M15.3401 10.5331C15.5207 10.8033 15.3068 11.2026 14.9602 11.4683C14.8579 11.547 14.7225 11.5173 14.7026 11.452C14.6468 11.2649 14.6707 11.0527 14.7451 10.8731C14.9655 10.3342 15.2484 10.3966 15.3401 10.5331Z"
        fill="#69F0AE"
      />
      <path
        id="Vector_10"
        d="M1.29747 11.7355C1.08896 10.456 1.8606 10.1338 1.8606 10.1338C1.8606 10.1338 2.35731 10.0329 2.59106 11.4742C2.82481 12.9141 2.3281 13.015 2.3281 13.015C2.3281 13.015 1.50466 13.0165 1.29747 11.7355Z"
        fill="#26A69A"
      />
      <path
        id="Vector_11"
        d="M2.09883 10.5686C2.2768 10.717 2.20376 10.9115 2.06962 11.0465C1.91688 11.2024 1.80001 11.3731 1.66985 11.5497C1.64993 11.5765 1.62735 11.6062 1.59547 11.6136C1.53438 11.6284 1.48524 11.5587 1.46532 11.4919C1.40821 11.3048 1.41883 11.0851 1.50383 10.9129C1.74555 10.4216 2.02977 10.5107 2.09883 10.5686Z"
        fill="#69F0AE"
      />
      <path
        id="Vector_12"
        d="M13.2792 12.9379C13.1875 13.5213 12.7692 13.9265 12.3428 13.8434C11.9165 13.7603 11.8581 13.263 11.9497 12.6797C12.0414 12.0963 12.2472 11.6495 12.6722 11.7326C13.0986 11.8158 13.3708 12.3561 13.2792 12.9379ZM4.04074 12.9379C4.13238 13.5213 4.55074 13.9265 4.97707 13.8434C5.40339 13.7603 5.46183 13.263 5.37019 12.6797C5.27855 12.0963 5.07269 11.6495 4.64769 11.7326C4.22269 11.8158 3.95043 12.3561 4.04074 12.9379Z"
        fill="#F44336"
      />
      <path
        id="Vector_13"
        d="M4.65881 12.5491C4.56186 12.6708 4.32545 12.9158 4.24178 12.7287C4.12756 12.4734 4.28561 12.0875 4.46624 11.9598C4.64686 11.8322 4.79428 11.9331 4.81952 12.0474C4.85006 12.1929 4.74514 12.4393 4.65881 12.5491ZM12.2158 12.9217C12.0844 12.8994 12.0698 12.3933 12.423 11.9954C12.5917 11.8054 12.8334 12.0311 12.7723 12.3354C12.7139 12.6248 12.4562 12.9633 12.2158 12.9217Z"
        fill="#FFA8A4"
      />
      <path
        id="Vector_14"
        d="M14.4957 14.5781C13.7002 15.0234 11.8753 16.2095 8.50586 16.2095C5.13641 16.2095 3.31156 15.0234 2.51602 14.5781C2.51602 14.5781 2.23047 14.7488 2.23047 14.927V16.2941C2.23047 16.4766 2.3168 16.6444 2.45758 16.7379C3.07914 17.1476 4.97305 18.1154 8.50719 18.1154C12.0413 18.1154 13.9352 17.1476 14.5568 16.7379C14.6259 16.6924 14.6832 16.6275 14.723 16.5496C14.7628 16.4718 14.7838 16.3837 14.7839 16.2941V14.927C14.7812 14.7488 14.4957 14.5781 14.4957 14.5781Z"
        fill="#FFCA28"
      />
      <path
        id="Vector_15"
        d="M5.25766 16.453C5.62953 16.5347 5.74242 16.5703 5.71719 16.8019C5.66539 17.2576 4.81937 17.1492 4.31867 17.0023C3.28406 16.698 3.07422 16.3773 3.07422 16.0909C3.07422 15.8281 3.25484 15.797 3.53375 15.9068C3.86711 16.0389 4.38242 16.2616 5.25766 16.453Z"
        fill="#FFF59D"
      />
      <path
        id="Vector_16"
        d="M14.4992 14.8784C14.4992 14.8784 12.2985 16.2708 8.50938 16.2708C4.72023 16.2708 2.51953 14.8784 2.51953 14.8784"
        stroke="#F19534"
        stroke-width="0.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        id="Vector_17"
        d="M3.58139 7.35775C4.28795 6.79369 4.66779 5.78283 4.701 4.17377C4.70365 4.0283 4.74084 3.98525 4.81123 3.97635C4.92412 3.96299 4.94271 4.07729 4.94139 4.15893C4.90951 5.89564 4.71162 6.98072 3.92803 7.59229C3.88951 7.62197 3.61459 7.809 3.49771 7.67986C3.35826 7.52846 3.53623 7.39338 3.58139 7.35775ZM4.22818 2.30643C4.2056 2.03775 4.26139 1.55385 4.89225 1.33416C5.07685 1.27033 5.19107 1.37127 5.21232 1.44994C5.26545 1.64588 5.11139 1.72307 5.041 1.7483C4.55623 1.92346 4.53232 2.19361 4.43271 2.3658C4.3331 2.53799 4.23615 2.38807 4.22818 2.30643ZM10.388 7.0015C11.0269 6.36767 11.4505 5.65963 11.7294 4.0476C11.7547 3.9051 11.7919 3.8665 11.8609 3.86947C11.9738 3.87244 11.9791 3.98971 11.9672 4.06986C11.7308 5.78877 11.5063 6.27861 10.7187 7.25385C10.6297 7.36369 10.4133 7.46314 10.2911 7.34885C10.1808 7.24643 10.3083 7.08166 10.388 7.0015ZM11.3283 2.31978C11.3058 2.05111 11.3615 1.56721 11.9924 1.34752C12.177 1.28369 12.2912 1.38463 12.3125 1.4633C12.3656 1.65924 12.2115 1.73643 12.1412 1.76166C11.6564 1.93682 11.6325 2.20697 11.5329 2.37916C11.4346 2.55135 11.3363 2.40143 11.3283 2.31978Z"
        fill="#FFCA28"
      />
      <path
        id="Vector_18"
        d="M4.19334 10.6313C2.65006 9.84907 2.19584 7.80806 1.95412 6.92189C1.92224 6.80462 1.93818 6.69329 2.0431 6.65767C2.14802 6.62204 2.21045 6.69775 2.24365 6.81501C2.41896 7.45775 3.10029 9.60415 4.50677 10.2142C4.60904 10.2588 4.76841 10.3671 4.68209 10.5527C4.62498 10.6729 4.4417 10.7575 4.19334 10.6313ZM1.68185 3.65626C1.60748 3.48407 1.57693 3.32079 1.17185 3.13228C1.06959 3.08478 1.00185 2.97939 1.02974 2.86064C1.05763 2.74189 1.16388 2.65282 1.31795 2.68251C1.81865 2.779 1.92756 3.34751 1.94881 3.54493C1.96873 3.73493 1.75756 3.82845 1.68185 3.65626ZM12.8633 10.6313C14.4066 9.84907 14.8608 7.80806 15.1026 6.92189C15.1344 6.80462 15.1185 6.69329 15.0136 6.65767C14.9086 6.62204 14.8462 6.69775 14.813 6.81501C14.6377 7.45775 13.9564 9.60415 12.5499 10.2142C12.4476 10.2588 12.2883 10.3671 12.3746 10.5527C12.4317 10.6729 12.615 10.7575 12.8633 10.6313ZM15.3748 3.65626C15.4492 3.48407 15.4797 3.32079 15.8848 3.13228C15.9871 3.08478 16.0548 2.97939 16.0269 2.86064C15.999 2.74189 15.8928 2.65282 15.7387 2.68251C15.238 2.779 15.1291 3.34751 15.1079 3.54493C15.0879 3.73493 15.3004 3.82845 15.3748 3.65626ZM7.8842 4.38657C7.96521 4.20103 8.10732 3.9472 8.57084 3.84032C8.74881 3.79876 8.8006 3.71267 8.78467 3.58204C8.75279 3.3104 8.44998 3.3297 8.28662 3.37275C7.74209 3.51525 7.62123 4.05556 7.59865 4.26931C7.57607 4.47267 7.80451 4.57212 7.8842 4.38657Z"
        fill="#FFF59D"
      />
    </g>
  </svg>
);

const silver = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_117_2755)">
      <path
        d="M10.3394 2.38533C10.6062 2.25627 10.7911 1.98393 10.7911 1.66783C10.7911 1.45665 10.7072 1.25412 10.5579 1.1048C10.4086 0.955472 10.206 0.871582 9.99484 0.871582C9.78367 0.871582 9.58114 0.955472 9.43181 1.1048C9.28248 1.25412 9.19859 1.45665 9.19859 1.66783C9.19859 1.9883 9.38781 2.26283 9.66016 2.38971C9.34516 4.09596 8.86172 5.3658 7.0625 5.63705C7.0625 5.63705 7.54703 8.05971 9.81328 8.05971C12.0795 8.05971 12.3092 5.66111 12.3092 5.66111C10.4706 5.75518 10.3153 3.44408 10.3394 2.38533Z"
        fill="#8E8E8E"
      />
      <path
        d="M3.80078 2.38533C3.53391 2.25627 3.34906 1.98393 3.34906 1.66783C3.34906 1.45665 3.43295 1.25412 3.58228 1.1048C3.7316 0.955472 3.93413 0.871582 4.14531 0.871582C4.35649 0.871582 4.55902 0.955472 4.70835 1.1048C4.85767 1.25412 4.94156 1.45665 4.94156 1.66783C4.94156 1.9883 4.75234 2.26283 4.48 2.38971C4.795 4.09596 5.27844 5.3658 7.07766 5.63705C7.07766 5.63705 6.59312 8.05971 4.32687 8.05971C2.06063 8.05971 1.83203 5.66221 1.83203 5.66221C3.66953 5.75518 3.82484 3.44408 3.80078 2.38533Z"
        fill="#8E8E8E"
      />
      <path
        d="M9.78125 8.0599C9.79109 8.0599 9.80094 8.061 9.81078 8.061C10.4353 8.061 10.9045 7.87834 11.2567 7.61475L9.78125 8.0599Z"
        fill="#CFCFCF"
      />
      <path
        d="M13.0431 1.84401C12.6789 1.79479 12.331 2.14151 12.2676 2.6162C12.2282 2.9126 12.3081 3.18932 12.4623 3.3676L12.1998 4.45589C12.1998 4.45589 11.7984 7.02729 9.77058 7.53479C8.14964 7.94057 7.5623 4.97323 7.42011 4.05667C7.72855 3.90354 7.94183 3.58635 7.94183 3.21776C7.94183 2.70042 7.52292 2.28151 7.00558 2.28151C6.48823 2.28151 6.06933 2.70042 6.06933 3.21776C6.06933 3.58854 6.28589 3.90901 6.5998 4.05995C6.48714 4.96448 5.99058 7.83338 4.24058 7.5337C2.46433 7.22854 1.68886 4.23714 1.50948 3.42339C1.72277 3.24839 1.84198 2.93995 1.79823 2.60854C1.7348 2.13276 1.35855 1.79151 0.958234 1.8451C0.557922 1.8987 0.285578 2.32745 0.349016 2.80214C0.394953 3.14776 0.607141 3.42229 0.872922 3.5262L2.26417 12.1701C2.26417 12.1701 3.47823 13.1293 7.00558 13.1293C10.5329 13.1293 11.747 12.1701 11.747 12.1701L13.1415 3.50323C13.3668 3.3851 13.544 3.11932 13.5878 2.79339C13.6523 2.3176 13.4084 1.89323 13.0431 1.84401Z"
        fill="#CFCFCF"
      />
      <path
        d="M7.04969 10.9279C7.63804 10.9279 8.115 10.3593 8.115 9.65803C8.115 8.95671 7.63804 8.38818 7.04969 8.38818C6.46133 8.38818 5.98438 8.95671 5.98438 9.65803C5.98438 10.3593 6.46133 10.9279 7.04969 10.9279Z"
        fill="#26A69A"
      />
      <path
        d="M7.04648 8.7017C7.08804 8.74763 7.12523 8.83185 7.04648 8.99591C6.96773 9.15998 6.54335 9.38201 6.4657 9.42685C6.38804 9.47279 6.33663 9.45201 6.31257 9.43341C6.19773 9.34154 6.24148 9.13373 6.31585 9.00685C6.47554 8.73232 6.81351 8.44904 7.04648 8.7017Z"
        fill="#69F0AE"
      />
      <path
        d="M6.96959 10.1312C6.84927 10.1892 6.45443 10.3653 6.58459 10.5742C6.66115 10.6978 6.81974 10.7503 6.96521 10.7568C7.11068 10.7634 7.25396 10.7175 7.38302 10.6507C7.99552 10.3336 8.04474 9.50012 7.92552 9.43668C7.80302 9.37106 7.7199 9.54059 7.65646 9.61278C7.46357 9.8288 7.23021 10.0049 6.96959 10.1312Z"
        fill="#00796B"
      />
      <path
        d="M12.9176 8.61878C13.0882 7.67487 12.4539 7.43862 12.4539 7.43862C12.4539 7.43862 12.0448 7.36425 11.8523 8.42628C11.6598 9.48722 12.0689 9.56159 12.0689 9.56159C12.0689 9.56159 12.7459 9.56269 12.9176 8.61878Z"
        fill="#26A69A"
      />
      <path
        d="M12.6323 7.76116C12.781 7.96022 12.605 8.25444 12.3195 8.45022C12.2353 8.50819 12.1237 8.48631 12.1073 8.43819C12.0614 8.30037 12.081 8.14397 12.1423 8.01162C12.3239 7.61459 12.5568 7.66053 12.6323 7.76116Z"
        fill="#69F0AE"
      />
      <path
        d="M1.06851 8.6471C0.896787 7.70429 1.53226 7.46694 1.53226 7.46694C1.53226 7.46694 1.94132 7.39257 2.13382 8.4546C2.32632 9.51554 1.91726 9.58991 1.91726 9.58991C1.91726 9.58991 1.23913 9.59101 1.06851 8.6471Z"
        fill="#26A69A"
      />
      <path
        d="M1.72684 7.7874C1.87341 7.89677 1.81325 8.04005 1.70278 8.13958C1.577 8.25443 1.48075 8.38021 1.37356 8.51036C1.35716 8.53005 1.33856 8.55193 1.31231 8.5574C1.262 8.56833 1.22153 8.51693 1.20512 8.46771C1.15809 8.3299 1.16684 8.16802 1.23684 8.04115C1.43591 7.67911 1.66997 7.74474 1.72684 7.7874Z"
        fill="#69F0AE"
      />
      <path
        d="M10.9349 9.53317C10.8594 9.96302 10.5149 10.2616 10.1638 10.2004C9.81269 10.1391 9.76456 9.7727 9.84003 9.34286C9.9155 8.91302 10.085 8.5838 10.435 8.64505C10.7861 8.7063 11.0103 9.10442 10.9349 9.53317ZM3.32675 9.53317C3.40222 9.96302 3.74675 10.2616 4.09784 10.2004C4.44894 10.1391 4.49706 9.7727 4.42159 9.34286C4.34612 8.91302 4.17659 8.5838 3.82659 8.64505C3.47659 8.7063 3.25237 9.10442 3.32675 9.53317Z"
        fill="#F44336"
      />
      <path
        d="M3.83621 9.24657C3.75637 9.33625 3.56168 9.51672 3.49277 9.37891C3.39871 9.19078 3.52887 8.90641 3.67762 8.81235C3.82637 8.71828 3.94777 8.79266 3.96855 8.87688C3.99371 8.98407 3.9073 9.16563 3.83621 9.24657ZM10.0596 9.5211C9.95137 9.50469 9.93933 9.13172 10.2303 8.8386C10.3692 8.6986 10.5682 8.86485 10.5179 9.08907C10.4698 9.30235 10.2576 9.55172 10.0596 9.5211Z"
        fill="#FFA8A4"
      />
      <path
        d="M11.9367 10.7417C11.2816 11.0698 9.77875 11.9437 7.00391 11.9437C4.22906 11.9437 2.72625 11.0698 2.07109 10.7417C2.07109 10.7417 1.83594 10.8675 1.83594 10.9987V12.0061C1.83594 12.1406 1.90703 12.2642 2.02297 12.3331C2.53484 12.635 4.09453 13.3481 7.005 13.3481C9.91547 13.3481 11.4752 12.635 11.987 12.3331C12.0439 12.2996 12.0911 12.2517 12.1239 12.1944C12.1567 12.137 12.174 12.0721 12.1741 12.0061V10.9987C12.1719 10.8675 11.9367 10.7417 11.9367 10.7417Z"
        fill="#CFCFCF"
      />
      <path
        d="M4.32937 12.1232C4.63562 12.1834 4.72859 12.2096 4.70781 12.3802C4.66516 12.716 3.96844 12.6362 3.55609 12.5279C2.70406 12.3037 2.53125 12.0674 2.53125 11.8563C2.53125 11.6627 2.68 11.6398 2.90969 11.7207C3.18422 11.818 3.60859 11.9821 4.32937 12.1232Z"
        fill="#E6E6E6"
      />
      <path
        d="M11.9398 10.9629C11.9398 10.9629 10.1275 11.9888 7.00703 11.9888C3.88656 11.9888 2.07422 10.9629 2.07422 10.9629"
        stroke="#8E8E8E"
        stroke-width="0.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M2.948 5.42158C3.52987 5.00595 3.84269 4.26111 3.87003 3.07549C3.87222 2.9683 3.90284 2.93658 3.96081 2.93002C4.05378 2.92017 4.06909 3.00439 4.068 3.06455C4.04175 4.34424 3.87878 5.14377 3.23347 5.59439C3.20175 5.61627 2.97534 5.75408 2.87909 5.65892C2.76425 5.54736 2.91081 5.44783 2.948 5.42158ZM3.48065 1.69955C3.46206 1.50158 3.508 1.14502 4.02753 0.983142C4.17956 0.936111 4.27362 1.01049 4.29112 1.06845C4.33487 1.21283 4.208 1.2697 4.15003 1.2883C3.75081 1.41736 3.73112 1.61642 3.64909 1.7433C3.56706 1.87017 3.48722 1.7597 3.48065 1.69955ZM8.55347 5.15908C9.07956 4.69205 9.42847 4.17033 9.65815 2.98252C9.67894 2.87752 9.70956 2.84908 9.76644 2.85127C9.8594 2.85345 9.86378 2.93986 9.85394 2.99892C9.65925 4.26549 9.4744 4.62642 8.82581 5.34502C8.75253 5.42595 8.57425 5.49924 8.47362 5.41502C8.38284 5.33955 8.48784 5.21814 8.55347 5.15908ZM9.32784 1.70939C9.30925 1.51142 9.35519 1.15486 9.87472 0.992986C10.0267 0.945955 10.1208 1.02033 10.1383 1.0783C10.1821 1.22267 10.0552 1.27955 9.99722 1.29814C9.598 1.4272 9.57831 1.62627 9.49628 1.75314C9.41534 1.88002 9.3344 1.76955 9.32784 1.70939Z"
        fill="#CFCFCF"
      />
      <path
        d="M3.45425 7.83344C2.18332 7.25703 1.80925 5.75313 1.61019 5.10016C1.58394 5.01375 1.59707 4.93172 1.68347 4.90547C1.76988 4.87922 1.82129 4.935 1.84863 5.02141C1.99301 5.495 2.5541 7.07656 3.71238 7.52609C3.7966 7.55891 3.92785 7.63875 3.85676 7.77547C3.80972 7.86406 3.65879 7.92641 3.45425 7.83344ZM1.38597 2.69391C1.32472 2.56703 1.29957 2.44672 0.965974 2.30781C0.881755 2.27281 0.825974 2.19516 0.848943 2.10766C0.871911 2.02016 0.959411 1.95453 1.08629 1.97641C1.49863 2.0475 1.58832 2.46641 1.60582 2.61188C1.62222 2.75188 1.44832 2.82078 1.38597 2.69391ZM10.5943 7.83344C11.8652 7.25703 12.2393 5.75313 12.4383 5.10016C12.4646 5.01375 12.4514 4.93172 12.365 4.90547C12.2786 4.87922 12.2272 4.935 12.1999 5.02141C12.0555 5.495 11.4944 7.07656 10.3361 7.52609C10.2519 7.55891 10.1207 7.63875 10.1918 7.77547C10.2388 7.86406 10.3897 7.92641 10.5943 7.83344ZM12.6625 2.69391C12.7238 2.56703 12.7489 2.44672 13.0825 2.30781C13.1668 2.27281 13.2225 2.19516 13.1996 2.10766C13.1766 2.02016 13.0891 1.95453 12.9622 1.97641C12.5499 2.0475 12.4602 2.46641 12.4427 2.61188C12.4263 2.75188 12.6013 2.82078 12.6625 2.69391ZM6.49379 3.23203C6.5605 3.09531 6.67754 2.90828 7.05926 2.82953C7.20582 2.79891 7.24847 2.73547 7.23535 2.63922C7.2091 2.43906 6.95972 2.45328 6.82519 2.485C6.37675 2.59 6.27722 2.98813 6.25863 3.14563C6.24004 3.29547 6.42816 3.36875 6.49379 3.23203Z"
        fill="#E6E6E6"
      />
    </g>
    <defs>
      <clipPath id="clip0_117_2755">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const bronze = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_117_2774)">
      <path
        d="M10.3394 2.38533C10.6062 2.25627 10.7911 1.98393 10.7911 1.66783C10.7911 1.45665 10.7072 1.25412 10.5579 1.1048C10.4086 0.955472 10.206 0.871582 9.99484 0.871582C9.78367 0.871582 9.58114 0.955472 9.43181 1.1048C9.28248 1.25412 9.19859 1.45665 9.19859 1.66783C9.19859 1.9883 9.38781 2.26283 9.66016 2.38971C9.34516 4.09596 8.86172 5.3658 7.0625 5.63705C7.0625 5.63705 7.54703 8.05971 9.81328 8.05971C12.0795 8.05971 12.3092 5.66111 12.3092 5.66111C10.4706 5.75518 10.3153 3.44408 10.3394 2.38533Z"
        fill="#563919"
      />
      <path
        d="M3.80078 2.38533C3.53391 2.25627 3.34906 1.98393 3.34906 1.66783C3.34906 1.45665 3.43295 1.25412 3.58228 1.1048C3.7316 0.955472 3.93413 0.871582 4.14531 0.871582C4.35649 0.871582 4.55902 0.955472 4.70835 1.1048C4.85767 1.25412 4.94156 1.45665 4.94156 1.66783C4.94156 1.9883 4.75234 2.26283 4.48 2.38971C4.795 4.09596 5.27844 5.3658 7.07766 5.63705C7.07766 5.63705 6.59312 8.05971 4.32687 8.05971C2.06063 8.05971 1.83203 5.66221 1.83203 5.66221C3.66953 5.75518 3.82484 3.44408 3.80078 2.38533Z"
        fill="#563919"
      />
      <path
        d="M9.78125 8.0599C9.79109 8.0599 9.80094 8.061 9.81078 8.061C10.4353 8.061 10.9045 7.87834 11.2567 7.61475L9.78125 8.0599Z"
        fill="#87511E"
      />
      <path
        d="M13.0431 1.84401C12.6789 1.79479 12.331 2.14151 12.2676 2.6162C12.2282 2.9126 12.3081 3.18932 12.4623 3.3676L12.1998 4.45589C12.1998 4.45589 11.7984 7.02729 9.77058 7.53479C8.14964 7.94057 7.5623 4.97323 7.42011 4.05667C7.72855 3.90354 7.94183 3.58635 7.94183 3.21776C7.94183 2.70042 7.52292 2.28151 7.00558 2.28151C6.48823 2.28151 6.06933 2.70042 6.06933 3.21776C6.06933 3.58854 6.28589 3.90901 6.5998 4.05995C6.48714 4.96448 5.99058 7.83338 4.24058 7.5337C2.46433 7.22854 1.68886 4.23714 1.50948 3.42339C1.72277 3.24839 1.84198 2.93995 1.79823 2.60854C1.7348 2.13276 1.35855 1.79151 0.958234 1.8451C0.557922 1.8987 0.285578 2.32745 0.349016 2.80214C0.394953 3.14776 0.607141 3.42229 0.872922 3.5262L2.26417 12.1701C2.26417 12.1701 3.47823 13.1293 7.00558 13.1293C10.5329 13.1293 11.747 12.1701 11.747 12.1701L13.1415 3.50323C13.3668 3.3851 13.544 3.11932 13.5878 2.79339C13.6523 2.3176 13.4084 1.89323 13.0431 1.84401Z"
        fill="#87511E"
      />
      <path
        d="M7.04969 10.9279C7.63804 10.9279 8.115 10.3593 8.115 9.65803C8.115 8.95671 7.63804 8.38818 7.04969 8.38818C6.46133 8.38818 5.98438 8.95671 5.98438 9.65803C5.98438 10.3593 6.46133 10.9279 7.04969 10.9279Z"
        fill="#26A69A"
      />
      <path
        d="M7.04648 8.7017C7.08804 8.74763 7.12523 8.83185 7.04648 8.99591C6.96773 9.15998 6.54335 9.38201 6.4657 9.42685C6.38804 9.47279 6.33663 9.45201 6.31257 9.43341C6.19773 9.34154 6.24148 9.13373 6.31585 9.00685C6.47554 8.73232 6.81351 8.44904 7.04648 8.7017Z"
        fill="#69F0AE"
      />
      <path
        d="M6.96959 10.1312C6.84927 10.1892 6.45443 10.3653 6.58459 10.5742C6.66115 10.6978 6.81974 10.7503 6.96521 10.7568C7.11068 10.7634 7.25396 10.7175 7.38302 10.6507C7.99552 10.3336 8.04474 9.50012 7.92552 9.43668C7.80302 9.37106 7.7199 9.54059 7.65646 9.61278C7.46357 9.8288 7.23021 10.0049 6.96959 10.1312Z"
        fill="#00796B"
      />
      <path
        d="M12.9176 8.61878C13.0882 7.67487 12.4539 7.43862 12.4539 7.43862C12.4539 7.43862 12.0448 7.36425 11.8523 8.42628C11.6598 9.48722 12.0689 9.56159 12.0689 9.56159C12.0689 9.56159 12.7459 9.56269 12.9176 8.61878Z"
        fill="#26A69A"
      />
      <path
        d="M12.6323 7.76116C12.781 7.96022 12.605 8.25444 12.3195 8.45022C12.2353 8.50819 12.1237 8.48631 12.1073 8.43819C12.0614 8.30037 12.081 8.14397 12.1423 8.01162C12.3239 7.61459 12.5568 7.66053 12.6323 7.76116Z"
        fill="#69F0AE"
      />
      <path
        d="M1.06851 8.6471C0.896787 7.70429 1.53226 7.46694 1.53226 7.46694C1.53226 7.46694 1.94132 7.39257 2.13382 8.4546C2.32632 9.51554 1.91726 9.58991 1.91726 9.58991C1.91726 9.58991 1.23913 9.59101 1.06851 8.6471Z"
        fill="#26A69A"
      />
      <path
        d="M1.72684 7.7874C1.87341 7.89677 1.81325 8.04005 1.70278 8.13958C1.577 8.25443 1.48075 8.38021 1.37356 8.51036C1.35716 8.53005 1.33856 8.55193 1.31231 8.5574C1.262 8.56833 1.22153 8.51693 1.20512 8.46771C1.15809 8.3299 1.16684 8.16802 1.23684 8.04115C1.43591 7.67911 1.66997 7.74474 1.72684 7.7874Z"
        fill="#69F0AE"
      />
      <path
        d="M10.9349 9.53317C10.8594 9.96302 10.5149 10.2616 10.1638 10.2004C9.81269 10.1391 9.76456 9.7727 9.84003 9.34286C9.9155 8.91302 10.085 8.5838 10.435 8.64505C10.7861 8.7063 11.0103 9.10442 10.9349 9.53317ZM3.32675 9.53317C3.40222 9.96302 3.74675 10.2616 4.09784 10.2004C4.44894 10.1391 4.49706 9.7727 4.42159 9.34286C4.34612 8.91302 4.17659 8.5838 3.82659 8.64505C3.47659 8.7063 3.25237 9.10442 3.32675 9.53317Z"
        fill="#F44336"
      />
      <path
        d="M3.83621 9.24657C3.75637 9.33625 3.56168 9.51672 3.49277 9.37891C3.39871 9.19078 3.52887 8.90641 3.67762 8.81235C3.82637 8.71828 3.94777 8.79266 3.96855 8.87688C3.99371 8.98407 3.9073 9.16563 3.83621 9.24657ZM10.0596 9.5211C9.95137 9.50469 9.93933 9.13172 10.2303 8.8386C10.3692 8.6986 10.5682 8.86485 10.5179 9.08907C10.4698 9.30235 10.2576 9.55172 10.0596 9.5211Z"
        fill="#FFA8A4"
      />
      <path
        d="M11.9367 10.7417C11.2816 11.0698 9.77875 11.9437 7.00391 11.9437C4.22906 11.9437 2.72625 11.0698 2.07109 10.7417C2.07109 10.7417 1.83594 10.8675 1.83594 10.9987V12.0061C1.83594 12.1406 1.90703 12.2642 2.02297 12.3331C2.53484 12.635 4.09453 13.3481 7.005 13.3481C9.91547 13.3481 11.4752 12.635 11.987 12.3331C12.0439 12.2996 12.0911 12.2517 12.1239 12.1944C12.1567 12.137 12.174 12.0721 12.1741 12.0061V10.9987C12.1719 10.8675 11.9367 10.7417 11.9367 10.7417Z"
        fill="#87511E"
      />
      <path
        d="M4.32937 12.1232C4.63562 12.1834 4.72859 12.2096 4.70781 12.3802C4.66516 12.716 3.96844 12.6362 3.55609 12.5279C2.70406 12.3037 2.53125 12.0674 2.53125 11.8563C2.53125 11.6627 2.68 11.6398 2.90969 11.7207C3.18422 11.818 3.60859 11.9821 4.32937 12.1232Z"
        fill="#D18742"
      />
      <path
        d="M11.9398 10.9629C11.9398 10.9629 10.1275 11.9888 7.00703 11.9888C3.88656 11.9888 2.07422 10.9629 2.07422 10.9629"
        stroke="#563919"
        stroke-width="0.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M2.948 5.42158C3.52987 5.00595 3.84269 4.26111 3.87003 3.07549C3.87222 2.9683 3.90284 2.93658 3.96081 2.93002C4.05378 2.92017 4.06909 3.00439 4.068 3.06455C4.04175 4.34424 3.87878 5.14377 3.23347 5.59439C3.20175 5.61627 2.97534 5.75408 2.87909 5.65892C2.76425 5.54736 2.91081 5.44783 2.948 5.42158ZM3.48065 1.69955C3.46206 1.50158 3.508 1.14502 4.02753 0.983142C4.17956 0.936111 4.27362 1.01049 4.29112 1.06845C4.33487 1.21283 4.208 1.2697 4.15003 1.2883C3.75081 1.41736 3.73112 1.61642 3.64909 1.7433C3.56706 1.87017 3.48722 1.7597 3.48065 1.69955ZM8.55347 5.15908C9.07956 4.69205 9.42847 4.17033 9.65815 2.98252C9.67894 2.87752 9.70956 2.84908 9.76644 2.85127C9.8594 2.85345 9.86378 2.93986 9.85394 2.99892C9.65925 4.26549 9.4744 4.62642 8.82581 5.34502C8.75253 5.42595 8.57425 5.49924 8.47362 5.41502C8.38284 5.33955 8.48784 5.21814 8.55347 5.15908ZM9.32784 1.70939C9.30925 1.51142 9.35519 1.15486 9.87472 0.992986C10.0267 0.945955 10.1208 1.02033 10.1383 1.0783C10.1821 1.22267 10.0552 1.27955 9.99722 1.29814C9.598 1.4272 9.57831 1.62627 9.49628 1.75314C9.41534 1.88002 9.3344 1.76955 9.32784 1.70939Z"
        fill="#87511E"
      />
      <path
        d="M3.45425 7.83344C2.18332 7.25703 1.80925 5.75313 1.61019 5.10016C1.58394 5.01375 1.59707 4.93172 1.68347 4.90547C1.76988 4.87922 1.82129 4.935 1.84863 5.02141C1.99301 5.495 2.5541 7.07656 3.71238 7.52609C3.7966 7.55891 3.92785 7.63875 3.85676 7.77547C3.80972 7.86406 3.65879 7.92641 3.45425 7.83344ZM1.38597 2.69391C1.32472 2.56703 1.29957 2.44672 0.965974 2.30781C0.881755 2.27281 0.825974 2.19516 0.848943 2.10766C0.871911 2.02016 0.959411 1.95453 1.08629 1.97641C1.49863 2.0475 1.58832 2.46641 1.60582 2.61188C1.62222 2.75188 1.44832 2.82078 1.38597 2.69391ZM10.5943 7.83344C11.8652 7.25703 12.2393 5.75313 12.4383 5.10016C12.4646 5.01375 12.4514 4.93172 12.365 4.90547C12.2786 4.87922 12.2272 4.935 12.1999 5.02141C12.0555 5.495 11.4944 7.07656 10.3361 7.52609C10.2519 7.55891 10.1207 7.63875 10.1918 7.77547C10.2388 7.86406 10.3897 7.92641 10.5943 7.83344ZM12.6625 2.69391C12.7238 2.56703 12.7489 2.44672 13.0825 2.30781C13.1668 2.27281 13.2225 2.19516 13.1996 2.10766C13.1766 2.02016 13.0891 1.95453 12.9622 1.97641C12.5499 2.0475 12.4602 2.46641 12.4427 2.61188C12.4263 2.75188 12.6013 2.82078 12.6625 2.69391ZM6.49379 3.23203C6.5605 3.09531 6.67754 2.90828 7.05926 2.82953C7.20582 2.79891 7.24847 2.73547 7.23535 2.63922C7.2091 2.43906 6.95972 2.45328 6.82519 2.485C6.37675 2.59 6.27722 2.98813 6.25863 3.14563C6.24004 3.29547 6.42816 3.36875 6.49379 3.23203Z"
        fill="#D18742"
      />
    </g>
    <defs>
      <clipPath id="clip0_117_2774">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const star = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.06772 5.90862L9.49522 8.78317L12.3612 9.26488L9.75943 10.5597L10.1869 13.4343L8.15145 11.36L5.54969 12.6549L6.89346 10.078L4.85798 8.00375L7.72395 8.48546L9.06772 5.90862Z"
      fill="#FFCA28"
    />
    <path
      d="M20.0912 0.663014L20.5187 3.53757L23.3846 4.01928L20.7829 5.31414L21.2104 8.1887L19.1749 6.11441L16.5731 7.40928L17.9169 4.83243L15.8814 2.75815L18.7474 3.23986L20.0912 0.663014Z"
      fill="#FFCA28"
    />
    <path
      d="M3.95264 18.2316L4.27327 20.3876L6.42275 20.7488L4.47143 21.72L4.79205 23.8759L3.26544 22.3202L1.31413 23.2913L2.32195 21.3587L0.795341 19.803L2.94482 20.1643L3.95264 18.2316Z"
      fill="#FFCA28"
    />
  </svg>
);
