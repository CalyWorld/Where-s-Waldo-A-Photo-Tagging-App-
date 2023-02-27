import React, {useState } from "react";
import { Waldo } from "../components/waldo";

export const GetPosition = () =>{

    const [mousePosition, setPosition] = useState({});

    const getPosition = (e, setModal) =>{
        const getX = e.clientX - e.target.offsetLeft;
        const getY = e.clientY - e.target.offsetTop;

        
        setPosition({x:getX + 30, y:getY + 50});
        setModal(true);
    }

    return(
        <>
        <Waldo mousePosition={mousePosition} getPosition={getPosition}/>
        </>
    )
}