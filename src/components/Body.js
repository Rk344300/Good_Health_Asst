import React from 'react'

import track from "../static/images/track.png";
import wallet from "../static/images/wallet.png";
import blog from "../static/images/blogs.png";
import consult from "../static/images/consult.png";


import './Body.css';

function Body() {
  return (
    <div className='bodyy'>
        <div >
            <span className='heading'> Welcome, <b>June!</b></span>
        </div>
        <div className='bodyTopic'>
            <div className='topic bgcolor1'>
                <div>
                <img  alt='' src={track}  />
                <span className='topicName'>TRACK</span>
                </div>
            </div>
            <div className='topic bgcolor2'>
            <div>
                <img  alt='' src={wallet}  />
                <span className='topicName'>WALLET</span>
                </div>

            </div>
            <div className='topic bgcolor3'>
            <div>
                <img  alt='' src={blog}  />
                <span className='topicName'>BLOGS</span>
                </div>
            </div>
            <div className='topic bgcolor4'>
            <div>
                <img  alt='' src={consult}  />
                <span className='topicName'>CONSULT</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body