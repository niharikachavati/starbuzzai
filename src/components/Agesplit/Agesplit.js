import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './Agesplit.css'
import { Chart } from "react-google-charts";



const Agesplit = () => {
  const data = [
    ["Gender", "percent"],
    ["male", 53],
    ["female", 48],
    
  ];
  const options = {
    // title: "My Daily Activities",
    sliceVisibilityThreshold: 0.2, // 20%
    colors:["#FF5900" , "#FF9C66"]
  };
  
  return (
    <div className="split">
     <h6>Audience Age Split</h6>
     <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"180px"}
    /></div>  
  )
}

export default Agesplit