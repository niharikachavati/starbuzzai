import React from 'react'
import './Credibility.css'
import {BsChatLeftTextFill,BsHeartFill} from "react-icons/bs";

const Credibility = () => {
  return (
    <div className='cred'>
    <div className='audi'> <h6>Audience Credibility</h6></div>
    <div className='content'>
      <div className='circontent'><p>9.0</p></div>
      <div className='cont'><p>This tells about how consistent you are with your content</p></div>
    </div>
    <div className='boxes'>
      <div className='boxes1'>
      <BsChatLeftTextFill className='text-Secondary' />
      <h4>1.403k</h4>
      <p>Avg. Comments</p></div>
      <div className='boxes2'>
      <BsHeartFill  className='text-Secondary'/>
      <h4>267.445k</h4>
      <p>Avg. Likes</p></div>
    </div>
    </div>
  )
}

export default Credibility