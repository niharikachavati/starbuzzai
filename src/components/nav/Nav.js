import React from 'react'
import './Nav.css'


import { BsPersonCircle , BsBell, BsGear,BsInstagram} from "react-icons/bs";



const Nav = () => {
  return (
    <div className='navbar'>
    <div className='name'><h6>9GAG Inc.</h6></div>
    <div className='search'><div className='image'></div><h6>Search Instagram</h6></div>
    <div className='icon'>
    <BsBell  size={20} margin={20}/>
   
    <BsPersonCircle  size={20} margin={20} />
    
    <BsGear  size={20} className='ml-10' />

      </div>    
    
    </div>
  )
}

export default Nav