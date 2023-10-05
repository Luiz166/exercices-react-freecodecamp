import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import CardData from "./data";


const App = () => {
  const cards = CardData.map(item => {
    return(
      <Card
      img={item.coverImg}
      score={item.stats.rating}
      score2={item.stats.reviewCount}
      lesson={item.title}
      locale={item.location}
      price={item.price}
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
