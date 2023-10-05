import React from "react";
import Star from "../images/Star.png";

export default function Card({ img, score, score2, locale, lesson, price, openSpots }) {
    let BadgeText
        if (openSpots === 0) {
            BadgeText = "SOLD OUT"
        }
        else if (locale === "Online"){
            BadgeText = "ONLINE"
        }
        else if (openSpots > 0){
            BadgeText = `${openSpots} AVALIABLES`
        }

    return (
        <div className="Card">
            {BadgeText && <div className="CardBadge">{BadgeText}</div>}
            <img id="PersonPic" src={img} alt="PersonPic" />
            <div className="CardStats">
                <img id="Star" src={Star} alt="Star" />
                <span>{score}</span>
                <span className="Gray">({score2}) • {locale}</span>
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