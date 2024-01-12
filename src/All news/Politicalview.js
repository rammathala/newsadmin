import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Po from './Po';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
function Politicalview() {
    const [poli, setpoli] = useState([])
    useEffect(()=>{
       getpns();
     },[]);
     function getpns(){
       db.collection('Political').orderBy('date','desc').onSnapshot(function(querySnapshot){
         setpoli(
           querySnapshot.docs.map((doc)=>({
             id:doc.id,
             title:doc.data().Ntitle,
             subtitle:doc.data().Stitle,
             image: doc.data().image,
             desc: doc.data().Description,
             artlink:doc.data().links,
             date:doc.data().date
           }))
         );
       });
       
     }

  return (
    <div>
      <div className='topti'>  <h1>PoliticalNews</h1>
      <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{poli.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div></div> 
      
       {
        poli.map(po=>(
  <Po id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} link={po.artlink} stitle={po.subtitle}/>        )

        )
       }
 
    </div>
  )
}

export default Politicalview