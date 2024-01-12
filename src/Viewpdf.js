import React, { useEffect, useState } from 'react'
import './view.css'

import db from './firebase';
import Pdfcard from './Pdfcard';
import { Link } from 'react-router-dom';
function Viewpdf() {
  const [pdfs,setpdfs] = useState([''])
  useEffect(()=>{
    getpdfs();
  },[]);
  function getpdfs(){
    db.collection('pdfs').onSnapshot(function(querySnapshot){
      setpdfs(
        querySnapshot.docs.map((doc)=>({
          id:doc.id,
          name:doc.data().pdfname,
          pdf:doc.data().pdf,
        }))
      );
    });
 console.log(pdfs)
  }
  return (
    <div className='viewpdf'>
        <div className='pdfcoun'>
        <Link to={'/uploads'} className='getback1' >Back to Uploads</Link>
           <p>Total pdf:{pdfs.length}</p>
        </div>
  <div className='viewpdf1'>

  {
        pdfs.map((pdf)=>(
     <Pdfcard id={pdf.id} name={pdf.name} pdf={pdf.pdf}/>
        ))
      }
   
   </div>
    </div>
  )
}

export default Viewpdf