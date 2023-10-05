import React from "react";
import Star from "../images/Star.png";

export default function Card({item}) {
    let BadgeText
        if (item.openSpots === 0) {
            BadgeText = "SOLD OUT"
        }
        else if (item.location === "Online"){
            BadgeText = "ONLINE"
        }
        else if (item.openSpots > 0){
            BadgeText = `${item.openSpots} AVALIABLES`
        }

    return (
        <div className="Card">
            {BadgeText && <div className="CardBadge">{BadgeText}</div>}
            <img id="PersonPic" src={item.coverImg} alt="PersonPic" />
            <div className="CardStats">
                <img id="Star" src={Star} alt="Star" />
                <span>{item.stats.rating}</span>
                <span className="Gray">({item.stats.reviewCount}) • {item.location}</span>
            </div>
            <span>{item.title}</span>
            <p className="Bold">
                ${item.price}
                <span>
                    / person
                </span>
            </p>
        </div>
    )
}