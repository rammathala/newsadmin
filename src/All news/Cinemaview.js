import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Ci from './Ci';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
function Cinemaview() {
    const [cinema, setcinema] = useState([])
    useEffect(()=>{
       getpmps();
     },[]);
     function getpmps(){
       db.collection('Cinema').orderBy('date','desc').onSnapshot(function(querySnapshot){
         setcinema(
           querySnapshot.docs.map((doc)=>({
             id:doc.id,
             title:doc.data().title,
             image: doc.data().image,
             subtitle:doc.data().Stitle,
             desc: doc.data().description,
             artlink:doc.data().artlink,
             date:doc.data().date
           }))
         );
       });
    
     }
  return (
    <div>
    <div className='topti'><h1>Cinemaview</h1>
    <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{cinema.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div></div> 
    {
     cinema.map(po=>(
<Ci id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlink} stitle={po.subtitle}/>        )

     )
    }
    </div>
  )
}

export default Cinemaview