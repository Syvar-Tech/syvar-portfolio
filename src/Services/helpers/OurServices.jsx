import React from 'react'
import './ourServices.scss'
const OurServices = ({item}) => {
  return (
    <div className="rock-imageContainer" >
        <div className="rock-topbox"/>
        <div className="rock-content">
          <div className="rock-content-top">
            <div className="rock-number">{item.id}</div>
            <div className="rock-title">{item.title}</div>
          </div>
          <div
            className="rock-text-content"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <div className="rock-left">
              <img
                src={"https://i.postimg.cc/tR5fcG4g/unsplash-e-Ypc-LDXHVb0.png"}
                alt="image"
              />
            </div>
            <div className="rock-right">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurServices