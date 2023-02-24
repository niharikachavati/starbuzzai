import React from 'react'
import './Country.css'
import { Chart } from "react-google-charts";
const Country = () => {
  const data = [
    ["City", "male", "female"],
    ["Germany ", 0.3, 0.5],
    ["Malaysia", 1.4, 2],
    ["Philippines", 1, 1.3],
    ["United states", 1.5, 2.3],
    ["indonesia", 1, 1.5],
    
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
    <div className='country'>
    <h6>Audience By City</h6>
    <Chart
      chartType="BarChart"
      width="100%"
      height="180px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default Country