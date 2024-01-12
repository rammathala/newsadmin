import React from 'react'
import './Pdf.css'
import { Link } from 'react-router-dom'
import upload from './upload.jpg'
import viewp from './viewpdf.jpg'
function Pdfsec() {
  return (
    <div className='Pdfsec'>
        
        <div>
            <img src={upload}/>
        <Link to={'/upload pdf'} className='uploadsli'>
               Upload
               </Link>
         </div>
     
        <div>
            <img src={viewp}/>
        <Link to={'/view pdf'} className='uploadsli'>
          view pdf
          </Link>
         </div>
       <Link to={'/Dashboard'} className='getback'>Back to dashboard</Link>
    </div>
  )
}

export default Pdfsec