import React, { useEffect, useState } from 'react'
import './banner.css'
import uefaLogo from '../assets/UEFA LOGO.png'
import Links from '../assets/Links'
const Banner = () => {
  const [link,setLink] = useState("")
  useEffect(()=>{
let number =  Math.floor(Math.random() * 5)
setLink(Links[number])
  },[])
  return (
    <>
    <div className="bannerContainer">

    <div className="bannercontent">
      <div className="leftContent">
        <h1 className="bannerleftheading">Quiz Time</h1>
        <p className="bannerleftdsc">Are you ready to win?</p>
        <a href={link}>

        <button className='bannerleftbtn'>Test your Knowledge </button>
        </a>
      </div>
      <div className="midContent">
        <div className="bannerEuroLogo">
          <img src={uefaLogo} alt="Uefa logo" />
        </div>
      </div>
      <div className="rightContent">

        <h1 className="bannerrightheading">Predict & Win</h1>
        <p className="bannerrightdesc">Predict to Victory!</p>
        <button className="bannerrightbtn">Test your Knowledge </button>
      </div>
    </div>

    </div>
    </>
  )
}

export default Banner