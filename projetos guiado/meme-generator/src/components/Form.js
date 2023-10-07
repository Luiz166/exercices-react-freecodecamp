import React, { useState } from "react";
import memesData from "../memesData";

export default function Form() {
    const [memeImage, setMemeImage] = useState("")

    const FetchData = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    const handleClick = (e) => {
        e.preventDefault()
        FetchData()
    }

    return (
        <div className="Main flex flex-col mt-10">
            <form className="form flex flex-col gap-10">
                <div className="inputs flex justify-center gap-20">
                    <input className="border border-gray-400 border-2 rounded-xl p-2 w-3/4" type="text" placeholder="Shut up" />
                    <input className="border border-gray-400 border-2 rounded-xl p-2 w-3/4" type="text" placeholder="And take my money!" />
                </div>
                <button className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-purple-700 p-4 rounded-xl text-white"
                    type="submit" onClick={handleClick}>Get a new meme image🖼</button>
            </form>
            {memeImage && <img className="max-w-xl mt-5 m-auto" src={memeImage} alt="memeImage" />}
        </div>
    )
}