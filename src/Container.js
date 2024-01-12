import React from 'react'
import './Container.css';


function Container() {
  return (
    <div className='Container'>
     
     <div className='new'>
     <div className='hea'>
      <h4>Trending</h4>
     </div>
     <div className='Images'>
      <div className='left'>
      <img src="https://th-i.thgim.com/public/incoming/55edgr/article67115411.ece/alternates/LANDSCAPE_1200/PTI07_24_2023_000136A.jpg"/>
      <h5>Parliament Monsoon Session | Day 4 adjourned after protests by Opposition over Manipur issue</h5>
      <p>As the Lok Sabha reconvened at 2:30 p.m. after an earlier adjournment, sloganeering from the Opposition benches continued and Speaker Om Birla tried to calm them down....</p>
      </div>
      <div className='Right'>
            <div className='i1'>
                <img src='https://th-i.thgim.com/public/opinion/op-ed/vxwtba/article67113405.ece/alternates/LANDSCAPE_1200/iStock-916557108.jpg'/>
               <h5>Dilemmas of India’s great power ambitions</h5>
            </div>
            <div className='i2'>
       <img src='https://th-i.thgim.com/public/news/international/agtk1z/article67116543.ece/alternates/LANDSCAPE_1200/2023-07-24T143014Z_1738891392_RC2ZVZ9JUE76_RTRMADP_3_PAKISTAN-POLITICS-KHAN.JPG'/>
            <h4>New arrest warrant issued for former Pakistan Prime Minister Imran Khan: Geo News</h4>
            </div>
      </div>
     </div>
      
     </div>
     
     </div>
   
  )
}

export default Container