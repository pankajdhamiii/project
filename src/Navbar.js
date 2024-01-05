import React from 'react'
import "./navbar.css"
import { FaRegBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import HeroSection from './HeroSection';

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="leftside">
            <img src="logo.png" alt="logo" />
            <div className='home'>
            <MdHome />
                <h3>Home</h3>
            </div>
            <div className="bar">
                <MdBarChart className='baricon'/>
                <h3>My Space</h3>
            </div>          
            <div className='other'>
                <h4>Leave</h4>
                <h4>Attendance</h4>
                <h4>Performance</h4>
                <h4>Expenses & Travel</h4>
                <h4>Help Desk</h4>
            </div>
        </div>
        <div className="rightside">
            <div className='main'>
            <input type="search" placeholder='search'/>         
            <FaRegBell className='bell' />
            <MdMessage className='message'/>
            <div className='div1'></div>
            <div className='div2'>
                <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            </div> 
            <HeroSection/>           
        </div>
    </nav>
        
    </>
  )
}

export default Navbar