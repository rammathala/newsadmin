import React, { useState } from 'react'
import { Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import db from './firebase';
function Pdfcard({id,name,pdf}) {

    const [viewpdf,setviewpdf] = useState(false)
  function delpdf(){
    db.collection('pdfs').doc(id).delete()
  }
  return (
    <>
    
    <div className='pdfcard' id={id}>
    
    <i class='bx bxs-file-pdf pdfico'></i>
    <p>{name}</p>
    <div>
    <Button className='Viewbu' onClick={()=>setviewpdf(true)}>View pdf</Button>
    <IconButton onClick={delpdf}>
    <DeleteOutlineIcon/>
    </IconButton>
     </div>
    </div>
    {
        viewpdf &&<div className='pdfview' >
            <div>
                <h3>{name}</h3>
            <Button variant='contained' onClick={()=>setviewpdf(false)}>Close</Button>
            </div>
            
            <iframe src={pdf}></iframe>
        </div>
    }
    </>
  )
}

export default Pdfcard