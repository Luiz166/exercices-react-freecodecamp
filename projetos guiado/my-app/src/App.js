import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";

const App = () => {
    return(
        ReactDOM.render(
            <div>
                <Nav/>
                <Main/>
            </div>,
            document.getElementById("root")
        )
    )
}

export default App;
