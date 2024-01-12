import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Bo from './Bo';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
function Businessview() {
    const [business, setbusiness] = useState([])
  useEffect(()=>{
     getpbps();
   },[]);
   function getpbps(){
     db.collection('Business').orderBy('date','desc').onSnapshot(function(querySnapshot){
       setbusiness(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           image: doc.data().image,
           subtitle:doc.data().Stitle,
           desc: doc.data().description,
           artlink:doc.data().links,
           date:doc.data().date
         }))
       );
     });
  
   }
  return (
    <div>
      <div className='topti'><h1>Businessview</h1>
    <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{business.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div>
    </div> 
        
        {
     business.map(po=>(
<Bo id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlink} stitle={po.subtitle}/>        )

     )
    }
    </div>
  )
}

export default Businessview