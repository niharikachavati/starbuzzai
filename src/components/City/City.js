import React from 'react'
import './City.css';
import { Chart } from "react-google-charts";

const City = () => {
  const data = [
    ["City", "male", "female"],
    ["Mexico City", 0.3, 0.5],
    ["London", 1, 1.3],
    ["Hongkong", 1.5, 2.3],
    ["Istanbul", 1, 1.5],
    ["jakarta", 1.4, 2],
  ];
  const options = {
    // title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      // title: "Total Population",
      minValue: 0,
    },
    colors:[ "#FF5900","#FFDDC9"]
    // vAxis: {
    //   // title: "City",
    // },
  };
  return (
    <div className='city'>
    <h6>Audience By City</h6>
     <Chart
      chartType="BarChart"
      width="100%"
      height="180px"
      data={data}
      options={options}
    /></div>
  )
}

export default City