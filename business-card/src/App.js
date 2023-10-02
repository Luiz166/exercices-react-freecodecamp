import React from "react";
import ReactDom from "react-dom";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
    return(
        ReactDom.render(
            <div className="Container">
                <Header/>
                <MainContent/>
                <Footer/>
            </div>,
            document.getElementById("root")
        )
    )
};

export default App;