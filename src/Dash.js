import React, { useEffect, useState } from 'react'
import './Dash.css'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'
import db, { auth } from './firebase'
import adpho from './50426.jpg'
function Dash({admin,logoout}) {
    const [loading,setloading] = useState(true)
    setTimeout(()=>setloading(false),1500)
    const [culture, setculture] = useState([''])
    const [poli, setpoli] = useState([''])
    const [spor, setspor] = useState([''])
    const [loc, setloc] = useState([''])
    const [busi, setbusi] = useState([''])
    const [agri, setagri] = useState([''])
    const [cine, setcine] = useState([''])
    const [educ,seteduc] = useState([''])
     useEffect(()=>{
        getpnps();
        getpns()
        getpns1()
        getpns2()
        getpns3()
        getpns4()
        getpns5()
        getpns6()
      },[]);
      function getpnps(){
        db.collection('Cultural').onSnapshot(function(querySnapshot){
          setculture(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns(){
        db.collection('Education').onSnapshot(function(querySnapshot){
          seteduc(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns1(){
        db.collection('Cinema').onSnapshot(function(querySnapshot){
          setcine(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns2(){
        db.collection('Political').onSnapshot(function(querySnapshot){
          setpoli(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns3(){
        db.collection('Local').onSnapshot(function(querySnapshot){
          setloc(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns4(){
        db.collection('Business').onSnapshot(function(querySnapshot){
          setbusi(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns5(){
        db.collection('Sports').onSnapshot(function(querySnapshot){
          setspor(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
      function getpns6(){
        db.collection('Agricultural').onSnapshot(function(querySnapshot){
          setagri(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().title,
              image: doc.data().image,
              desc: doc.data().description,
              artlink:doc.data().artlink,
              date:doc.data().date
            }))
          );
        });
     
      }
  
  return (
    <div className='Dash'>
    {
        loading?<>
          <div className='Loading'>
          <div className='loadcard'>
            <img src={logo}/>
                <p>LOADING....</p>
                <div class="loader">
  <div class="loaderBar"></div>
</div>
             
          </div>
          </div>
        </>:<>
        <div className='Dashleft'>
           <div className='leftlogo'>
               <img  src={logo}/>
           </div>
           <div className='admin'>
               <img rel="noopener noreferrer" src={adpho} alt='image'/>
               <p>{admin.displayName}</p>
           </div>
           <div className='count'>
               <Link to={'/all news'} className='news'><i class='bx bx-news' ></i><p>News</p></Link>
               <Link to={'/uploads'} className='news'><i class='bx bxs-file-pdf'></i><p>Upload pdf's</p></Link>
               <button className='logout' onClick={logoout}>
               <i class='bx bx-power-off'></i><p>Logout</p></button>
             <div className='countnews'>
               <div className='count1'>
                <p className='p' >Political</p>
                <h5>{poli.length}</h5>
               </div>
               <div className='count1'>
                <p className='e'>Education </p>
                <h5>{educ.length}</h5>
               </div>
               <div className='count1'>
                <p className='b'>Business</p>
                <h5>{busi.length}</h5>
               </div>
               <div className='count1' >
                <p className='s'>Sports </p>
                <h5>{spor.length}</h5>
               </div>
               <div className='count1'>
                <p className='c'>Cultural </p>
                <h5>{culture.length}</h5>
               </div>
               <div className='count1'>
                <p className='mo'>Cinema </p>
                <h5>{cine.length}</h5>
               </div>
               <div className='count1'>
                <p className='a'>Agriculture </p>
                <h5>{agri.length}</h5>
               </div>
               <div className='count1'>
                <p className='l'>Local </p>
                <h5>{loc.length}</h5>
               </div>
             </div>
           
           </div>
       </div>
       <div className='Dashright'>
        <div className='postcat'>
        
       <div className='postko'>
        <Link to={'/post Political news'}>
          <div className='post'>
               <img src='https://e1.pxfuel.com/desktop-wallpaper/313/348/desktop-wallpaper-details-of-the-new-parliament-building-india-parliament.jpg'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Political</p>
        </Link>
          </div>
          <div className='postko'>
            <Link to={'/post Business news'}>
          <div className='post'>
               <img src='https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBuZXdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Business</p>
           </Link>
          </div>
          <div className='postko'>
            <Link to={'/post Educational news'}>
          <div className='post'>
               <img src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGVkdWNhdGlvbiUyMG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Education</p></Link>
          </div>
           <div className='postko'>
            <Link to={'/post sports news'}>
           <div className='post'>
               <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/360800/360829.jpg'/>
               <i class='bx bx-plus'></i>
           </div>
               <p className='utext'>Sports</p></Link>
           </div>
           <div className='postko'>
            <Link to={'/post cinema news'}>
           <div className='post'>
               <img src='https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Cinemas</p>
           </Link>
           </div>
           <div className='postko'>
            <Link to={'/post agriculture news'}>
           <div className='post'>
               <img src='https://plus.unsplash.com/premium_photo-1668624623619-a16f5e15724d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Agriculture</p>
           </Link>
           </div>
           <div className='postko'>
            <Link to={'/post Local news'}>
           <div className='post'>
               <img src='https://thumbs.dreamstime.com/b/local-news-25068677.jpg'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Local News</p>
           </Link>
           </div>
           <div className='postko'>
            <Link to={'/post traditional news'}>
           <div className='post'>
               <img src='https://images.unsplash.com/photo-1585607344893-43a4bd91169a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
               <i class='bx bx-plus'></i>
           </div>
           <p className='utext'>Culture</p>
           </Link>
           </div>
           </div>
       </div></>
    }
       
    </div>
  )
}

export default Dash