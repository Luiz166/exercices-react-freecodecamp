import React from "react";

import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <Form />
      </div>
    </div>
  );
}

export default App;
