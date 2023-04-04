// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import { data } from "./Winedata";
import "./App.css";
import Barchart from "./components/Barchart";
import Scatterplot from "./components/Scatterplot"; 

function App() {
  // let barCategories = Object.keys(data[0]);
  return (
    <div className="container">
      <Barchart className = 'bar'/>
      <Scatterplot className = 'scatter' />
    </div>
  );
}
export default App;
