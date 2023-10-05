import React from "react";
import ReactDom from "react-dom";

import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
    return(
        ReactDom.render(
            <div className="Container">
                <MainContent/>
                <Footer/>
            </div>,
            document.getElementById("root")
        )
    )
};

export default App;