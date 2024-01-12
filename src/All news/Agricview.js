import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Ao from './Ao';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import './views.css'
function Agricview() {
    const [agri, setagri] = useState([])
     useEffect(()=>{
        getpaps();
      },[]);
      function getpaps(){
        db.collection('Agricultural').orderBy('date','desc').onSnapshot(function(querySnapshot){
          setagri(
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
     <div className='topti'>
      <h1>Agricultural News</h1>
     <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{agri.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div>
    </div>   
    
    {
     agri.map(po=>(
<Ao id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlink} stitle={po.subtitle}/>        )

     )
    }
    </div>
  )
}

export default Agricview