import "./App.css";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Strategy from "./components/Strategy/Strategy";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Strategy />
      <About />
    </div>
  );
}

export default App;
