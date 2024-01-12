import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Po from './Po';
import Lo from './Lo';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
function Localview() {
    const [local, setlocal] = useState([])
    useEffect(()=>{
       getplps();
     },[]);
     function getplps(){
       db.collection('Local').orderBy('date','desc').onSnapshot(function(querySnapshot){
         setlocal(
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
        
        <div className='topti'><h1>Localview</h1>
        <div className='top2'>
      <div className='top3'>
        <ArticleIcon className='aci'/>
        <p>{local.length}</p>
      </div>
      <Link className='backd' to={'/all news'}>Back to News</Link >
     </div></div> 
        {
     local.map(po=>(
<Lo id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlink} stitle={po.subtitle}/>        )

     )
    }
    </div>
  )
}

export default Localview