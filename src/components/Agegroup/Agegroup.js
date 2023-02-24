import React from "react";
// import { Bar } from 'react-chartjs-2'
// import {chart as chartJS} from 'chart.js/auto'
import "./Agegroup.css";
import { Chart } from "react-google-charts";

const Agegroup = () => {
  const data = [
    ["Age", "Age groups"],
    ["13-17", 3 ],
    [ "18-24", 27],
    ["25-34", 35 ],
    ["34-44", 18],
    ["45-64", 9],
    ["65-70", 3], 
  ];
  const options = {
    // title: "Popularity of Types of Pizza",
    // sliceVisibilityThreshold: 0.2, // 20%
    colors:["#FFDDC9"],
    // isStacked: 'percent',
    hAxis: {
      format: 'percent'
    } 
  };

  return (
    <div className="age">
      <h6>Audilence Age Groups</h6>
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
        width={"100%"}
        height={"180px"}
        />
    </div>
  );
};

export default Agegroup;
