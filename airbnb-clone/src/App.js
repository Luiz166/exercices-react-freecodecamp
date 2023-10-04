import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import KatieZaferes from "./images/image-12.png";
import WeddingImage from "./images/wedding-photography-1.png";
import MountainBike from "./images/mountain-bike-1.png";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="CardContainer">
        <Card
          img={KatieZaferes}
          score="5.0"
          score2="(6) • USA"
          lesson="Life lessons with Katie Zaferes"
          price="From $136" />
        <Card
          img={WeddingImage}
          score="5.0"
          score2="(30) • USA"
          lesson="Learn wedding photography"
          price="From $125" />
        <Card
          img={MountainBike}
          score="4.8"
          score2="(2) • USA"
          lesson="Group Mountain Biking"
          price="From $50" />
      </div>
    </div>
  );
}

export default App;
