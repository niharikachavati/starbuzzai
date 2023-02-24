import React from 'react'
import './Follower.css'
import { Chart } from "react-google-charts";

const Follower = () => {
  const data = [
    ["year", "followers"],
    ["2022-04",57600000 ],
    ["2022-05",57500000],
    ["2022-06",57500000],
    ["2022-07",57000687],
    ["2022-08",56300098],
    ["2022-09",55555000],
    ["2022-10",54890007],
    ["2022-11",54804760],
    ["2022-12",54000000]
   
  ];
  const options = {
    // title: "Company Performance",
    curveType: "function",
    // isStacked: true,
    legend: { position: "bottom" },
    colors:["#FF5900" ],
    // legend: { position: "top", maxLines: 8 },
  // vAxis: { minValue: 0 },
  };
 
  return (
    <div className='follow'>
      <h6>Followers Trend by Month</h6>
       <Chart
      chartType="LineChart"
      width="100%"
      height="320px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default Follower





