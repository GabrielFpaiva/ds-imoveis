import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Propriedades from "./components/Propriedades/Propriedades";
import Values from "./components/Values/Values";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Propriedades/>
      <Values/>
    </div>
  );
}

export default App;
