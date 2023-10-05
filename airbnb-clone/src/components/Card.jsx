import React from "react";
import Star from "../images/Star.png";

export default function Card({img, score, score2, locale, lesson, price}) {
    return (
        <div className="Card">
            <img id="PersonPic" src={img} alt="PersonPic"/>
            <div className="CardStats">
                <img id="Star" src={Star} alt="Star" />
                <span>{score}</span>
                <span className="Gray">({score2})• {locale}</span>
            </div>
                <span>{lesson}</span>
                    <p className="Bold"> 
                            ${price}
                        <span>
                            / person
                        </span>
                    </p>
        </div>
    )
}