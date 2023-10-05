import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import CardData from "./data";


const App = () => {
  const cards = CardData.map(item => {
    return(
      <Card
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="CardContainer">
        {cards}
      </div>
    </div>
  );
}

export default App;
