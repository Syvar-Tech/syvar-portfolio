import React, { useEffect, useState } from "react";
import "../css/OurServices.css";
import { motion } from "framer-motion";

function Hexagon(props){
    // useEffect(() => {
    //     alert(props.hexaArray.length);
    // },[]);

    return (
        <motion.div className="adrs-hexagon" style={{
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
                                String(((props.hexaContainerWidth/1.73  * 2.2) )) + "px" // Yo milauna baki xa

            // right: String(props.offSetLeft_/2) + "px"
        }}
        >
        {/* <div className="adrs-hexagon" style={{height: String(props.hexaContainerWidth/1.73) + "px", top: String(((((props.hexaIndex * 0.5) + (1 - props.hexaIndex % 2 * 1.5)) * props.hexaContainerWidth/1.73)) + (props.hexaContainerWidth/1.8)) + "px"}}> */}
        {/* <div className="adrs-hexagon" style={{height: String(props.hexaContainerWidth/1.73) + "px", top: String(((1 - props.hexaIndex % 2) * props.hexaContainerWidth/2) + (props.hexaContainerWidth/1.8)) + "px"}}> */}
            <div className="adrs-inner-rectangle1"></div>
            <div className="adrs-inner-rectangle2"></div>
            <div className="adrs-hexagon-content" style={{height: String(props.hexaContainerWidth) + "px", width: String(props.hexaContainerWidth/1.73) + "px", left: String((props.hexaContainerWidth - props.hexaContainerWidth/1.73) / 2) + "px"}}>
                <img className="adrs-hexagon-image" src={props.OurServicesList.image}/>
                <div className="adrs-hexagon-title">{props.OurServicesList.title}</div>
                <div className="adrs-hexagon-paragraph">{props.OurServicesList.paragraph}</div>
            </div>
            {/* <div className="adrs-triangles adrs-triangle-top" style={{borderLeft: String(hexaContainerWidth/2) + "px solid transparent", borderRight: String(hexaContainerWidth/2) + "px solid transparent", borderBottom: String((hexaContainerWidth/1.73)/2) + "px solid grey"}}>
            </div>
            <div className="adrs-triangles adrs-triangle-bottom" style={{borderLeft: String(hexaContainerWidth/2) + "px solid transparent", borderRight: String(hexaContainerWidth/2) + "px solid transparent", borderTop: String((hexaContainerWidth/1.73)/2) + "px solid grey"}}>
            </div> */}
        </motion.div>
    )
}

export default Hexagon;