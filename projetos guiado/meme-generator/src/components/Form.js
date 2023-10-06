import React from "react";

export default function Form() {
    return (
        <div className="Main flex flex-col mt-10">
            <form className="form flex flex-col gap-10">
                <div className="inputs flex justify-center gap-20">
                    <input className="border border-gray-400 border-2 rounded-xl p-2 w-3/4" type="text" placeholder="Shut up" />
                    <input className="border border-gray-400 border-2 rounded-xl p-2 w-3/4" type="text" placeholder="And take my money!" />
                </div>
                <button className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-purple-700 p-4 rounded-xl text-white"
                    type="submit">Get a new meme image🖼</button>
            </form>
        </div>
    )
}