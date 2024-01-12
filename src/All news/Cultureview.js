import React, { useEffect, useState } from 'react'
import Po from './Po';
import db from '../firebase';
import Co from './Co';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
function Cultureview() {
    const [culture, setculture] = useState([])
     useEffect(()=>{
        getpnps();
      },[]);
      function getpnps(){
        db.collection('Cultural').orderBy('date','desc').onSnapshot(function(querySnapshot){
          setculture(
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
        
        <div className='topti'><h1>Cultureview</h1>
        <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{culture.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div></div> 
        {
     culture.map(po=>(
<Co id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlink} stitle={po.subtitle}/>        )

     )
    }
    </div>
  )
}

export default Cultureview