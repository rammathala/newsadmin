import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Po from './Po';
import So from './So';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
function Sportsview() {
    const [sports, setsports] = useState([])
  useEffect(()=>{
     getpsps();
   },[]);
   function getpsps(){
     db.collection('Sports').orderBy('date','desc').onSnapshot(function(querySnapshot){
       setsports(
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
        
        <div className='topti'><h1>Sportsview</h1>
        <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{sports.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div></div> 
        {
     sports.map(po=>(
<So id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlink} stitle={po.subtitle}/>        )

     )
    }
    </div>
  )
}

export default Sportsview