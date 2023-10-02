import React from "react";
import ImageGroup from "../images/Group-77.png";

export default function Hero(){
    return(
        <div className="Hero">
            <img src={ImageGroup} alt="ImageGroup" />
            <section className="Experiences">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </div>
    )
}