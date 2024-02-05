import "./App.css";
import React, { useEffect } from "react";
import PortfolioContainer from "./components/PortfolioContainer";

function useSetTitle() {
  useEffect(() => {
    document.title = "Phoenix Staley - Portfolio"
  }, []);
}

function App() {
  useSetTitle();
  
  return (
    <PortfolioContainer />
  );
}

export default App;
