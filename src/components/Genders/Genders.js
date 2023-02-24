import React from 'react'
import './Genders.css'
import { Chart } from "react-google-charts";

const Genders = () => {
   const data = [
    ["Agegroup", "male ", "female"],
    ["45-64", 3, 2],
    ["35-44", 27 , 34],
    ["25-34", 18, 25],
    ["45-64", 32, 16],
    ["35-44", 28, 35],
    ["25-34", 26, 38],
  ];

  const options = {
    // title: "Followers Trend by Month",
    chartArea: { width: "70%" },
    hAxis: {
      // title: " Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
    colors:[ "#FFDDC9","#FF5900" ]
  };

  return (
    <div className='gender'>
      <h6>Genders by Age Group</h6>
     <Chart
      chartType="BarChart"
      width="100%"
      height="320px"
      data={data}
      options={options}
    /></div>
  )
}

export default Genders