import React from 'react'
import battery from "../static/images/battery-full.jpg"
import signalCell  from "../static/images/signal-cellular.jpg";
import signalWifi  from "../static/images/signal-wifi.jpg";

import "./Navbar.css";


function Navbar() {
  return (
    <div className='nav'>
        <div className='time'>
            <span>10:00</span>
        </div>

        <div className='icons'>
            <div  className='icon'><img src={signalCell} alt='' /></div>
            <div  className='icon'><img src={signalWifi}alt='' /></div>
            <div className='icon'><img src={battery} alt='' /></div>
        </div>


    </div>
  )
}

export default Navbar