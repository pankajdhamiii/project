import React from 'react'
import "./hero.css"
import { FaChevronDown } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { BiSolidPieChart } from "react-icons/bi";
import { MdFormatListBulleted } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
        <div className='herodiv'>
            <h3>My Space / <span> Attendance</span></h3>
            <div className='status'>
                <div className='sta'>
                    <h4>Attendance Status</h4>
                    <h5>Last Week <span> <FaChevronDown /></span></h5>
                    <div className='avg'>
                        <FaRegClock className='clock'/>
                        <div>
                            <h4>Avg hrs / Day</h4>
                            <h5>(6hrs 48m)</h5>
                        </div>
                        <BiSolidPieChart className='pie'/>
                        <div>
                            <h4>On Time Arrival</h4>
                            <h5>95%</h5>
                        </div>
                    </div>
                </div>
                <div className='timing' >
                    <h4>Timings</h4>
                    <div className='days'>
                        <h5>M</h5>
                        <h5>T</h5>
                        <h5>W</h5>
                        <h5>T</h5>
                        <h5>F</h5>
                        <h5>S</h5>
                        <h5>S</h5>
                    </div>
                    <div className='tmng'>
                        <h5>Today ( 09:30AM - 06:30PM )</h5>
                        <h5>Duration: 9h 0m  Break: 0m</h5>
                    </div>                    
                </div>
                <div className="action">
                    <h4>Action</h4>
                    <div className='twodivs'>
                        <div className="tim">
                            <h4>04:04:39 PM</h4>
                            <h5>Wed 06, Dec 2023</h5>
                        </div>
                        <div className='request'>
                            <h4>Leave Request</h4>
                            <h4>Work From Home</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='log'>Logs & Requests</h3>
            <h4 className='attendance'> Attendance Log <span> Attendance Requests</span></h4>
            <div className='timetable'>
                <div className='divs1'>
                    <h4>December, 2023</h4>
                    <div className='one'>
                        <h5>30 Days</h5>
                        <h5>Nov</h5>
                        <h5>Oct</h5>
                        <h5>Sep</h5>
                        <h5>Aug</h5>
                        <h5>Jul</h5>
                        <h5>Jun</h5>
                    </div>
                    <div className='icon'>
                        <MdFormatListBulleted/>
                        <FaCalendar/>
                    </div>
                </div>
                <div className='divs2'>
                    <h5>Date</h5>
                    <h5>Attendance Visuals</h5>
                    <h5>Effective Hours</h5>
                    <h5>Gross Hours</h5>
                    <h5>Extra Hours</h5>
                    <h5>Arrival</h5>
                    <h5>Log</h5>
                </div>
                <div className='divs3'>
                    <h5>Dec 04, Mon</h5>
                    <FaBarsProgress  className='bar'/>
                    <div className='effect'>
                        <BiSolidPieChart className='pie'/> 
                        <h5>9h 15m</h5>
                    </div>
                    <h5>9h 59m</h5>
                    <h5>0h 59m</h5>
                    <h5>✔️ On Time</h5>
                    <MdOutlineErrorOutline />
                </div>
                <div className='divs4'>
                    <h5>Dec 03, Sun <span>W-Off</span></h5>
                    <h5 className='week'>Full day weekly-off</h5>
                </div>
                <div className='divs5'>
                    <h5>Nov 30, Thu <span>Leave</span></h5>
                    <h5 className='sick'>Sick leave</h5>
                </div>
            </div>

        </div>
    </>
  )
}

export default HeroSection