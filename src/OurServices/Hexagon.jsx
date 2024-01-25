import React, { useEffect, useRef, useState } from "react";
import "../css/OurServices.css";
import { motion, transform } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import Atropos from 'atropos/react';
import 'atropos/css';

function Hexagon(props){

    const [rotateHexagon, setRotateHexagon] = useState(false);
    
    function startRotation() {
        setRotateHexagon(true);
    }

    function endRotation() {
        setRotateHexagon(false);
    }

    return (
        <Atropos
            // activeOffset={100}
            rotateXMax={16}
            rotateYMax={16}
            onTouchStart={startRotation}
            onTouchEnd={endRotation}
            className="adrs-hexagon" style={{
            height: String(props.hexaContainerWidth/1.73) + "px",
            top: 
                props.windowWidth <= 1300 ? 
                    props.windowWidth <= 920 ? 
                        String(((props.hexaIndex) * props.hexaContainerWidth/1.73) + (props.hexaContainerWidth)) + "px" 
                    :
                        props.hexaIndex !=  props.hexaArray.length - 1 ?
                            String(((((props.hexaIndex * 0.5) + (1 - props.hexaIndex % 2 * 1.5)) * props.hexaContainerWidth/1.73)) + (props.hexaContainerWidth/1.8)) + "px" 
                        :
                            props.hexaIndex % 2 == 0 ?
                                String(((((props.hexaIndex * 0.5) + (props.hexaIndex % 2 * 1.5)) * props.hexaContainerWidth/1.73)) + (props.hexaContainerWidth/1.8)) + "px" 
                            :
                                String(((((props.hexaIndex * 0.5) + (1 - props.hexaIndex % 2 * 1.5)) * props.hexaContainerWidth/1.73)) + (props.hexaContainerWidth/1.8)) + "px" 
                : 
                    String(((2 - props.hexaIndex % 3) * props.hexaContainerWidth/1.73) + (props.hexaContainerWidth/1.8)) + "px",
            left: 
                props.windowWidth <= 1300 &&
                    props. windowWidth > 920 &&
                        props.hexaIndex ==  props.hexaArray.length - 1 &&
                            props.hexaIndex % 2 == 0 &&
                                String(((props.hexaContainerWidth/1.73 * 2.2) )) + "px",
        }}
        >
           
            <div className="adrs-inner-rectangle1">
                <div className="adrs-inner-rectangle1-gradient">
                </div>
            </div>
            <div className="adrs-inner-rectangle2">
                <div className="adrs-inner-rectangle2-gradient">
                </div>
            </div>
            <div className="adrs-inner-rectangle">
                <div className="adrs-inner-rectangle-gradient">
                    <div className="atropos-highlight"></div>
                </div>
            </div>
            <div className="adrs-hexagon-content" style={{height: String(props.hexaContainerWidth) + "px", width: String(props.hexaContainerWidth/1.73) + "px", left: String((props.hexaContainerWidth - props.hexaContainerWidth/1.73) / 2) + "px"}}>
                <img className="adrs-hexagon-image" src={props.OurServicesList.image}/>
                <div className="adrs-hexagon-title">{props.OurServicesList.title}</div>
                <div className="adrs-hexagon-paragraph">{props.OurServicesList.paragraph}</div>
            </div>
        </Atropos>
    )
}

export default Hexagon;