import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return (
      <div className="container mx-auto">

        <Card
          key={item.id}
          item={item}
        />
        <hr className="mt-5"/>
      </div>
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
