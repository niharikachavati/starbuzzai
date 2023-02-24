import React from 'react'
import './Gag.css'

const Gag = () => {
  return (
    <div className='box'>
     
      <div className='circle'>
        <div className='img'></div>
      </div>
      <h2>9GAG: Go Fun The World</h2>
      <div className='text'>
        <div className='text2'>
          <h2>58.2k</h2>
          <p>Followers</p>
        </div>
        <div className='line'></div>
        <div className='text3'>
          <h2>0.461%</h2>
          <p>Engagement<br/>Rate</p>
          </div>
         

      </div>
      <div className='circle2'>
        <div className='cir'> 
        <div className='circle3'>
        <div className='cir1'><p>9.0</p></div>
        <h6>SB Score</h6>
        </div>
        <div className='circle4'>
        <div className='cir2'><p>8.2</p>
       
        </div>
        <h6>Consistency <br/>Score</h6>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Gag