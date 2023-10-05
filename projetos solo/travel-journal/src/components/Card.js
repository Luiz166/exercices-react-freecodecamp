import React from "react"
import LocaleLogo from "../images/location.svg";

export default function Card({item}) {
    return (
        <div className="Card flex container mx-auto px-4 mt-5">
            <img className="max-w-sm w-60 h-80 rounded-xl object-center object-cover" src={item.coverImage} alt="LocaleImage" />
            <div className="Informations px-5">
                <div className="TopBarInformations flex gap-2 items-center">
                    <img className="w-3 max-w-xs" src={LocaleLogo} alt="GpsLogo" />
                    <span className="font-normal tracking-wider">{item.location}</span>
                    <a className="text-sm text-gray-500 underline decoration-gray-500" href={item.mapsLink}> View on Google Maps</a>

                </div>
                <h1 className="text-5xl font-bold">{item.title}</h1>
                <div className="BottomInformations mt-5">
                    <span className="font-bold">{item.date}</span>
                    <p className="w-3/4">
                        {item.summary}
                    </p>

                </div>
            </div>
        </div>
    )
}