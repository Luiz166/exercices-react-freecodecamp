import React from "react";
import Star from "../images/Star.png";

export default function Card(props) {
    return (
        <div className="Card">
            <img id="PersonPic" src={props.img} alt="PersonPic"/>
            <div className="CardStats">
                <img id="Star" src={Star} alt="Star" />
                <span>{props.score}</span>
                <span className="Gray">{props.score2}</span>
            </div>
                <span>{props.lesson}</span>
                    <p className="Bold"> 
                            {props.price}
                        <span>
                            / person
                        </span>
                    </p>
        </div>
    )
}