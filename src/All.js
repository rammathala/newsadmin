import React from 'react'
import { Link } from 'react-router-dom'
import './All.css'
function All() {
  return (
    <div className='Allnews'>
      <div className='all1' >
        <Link className='gd'
         to={'/Dashboard'}>  Go to Dashboard</Link>
      </div>
        <div className='postcat1'>
        <div className='postko'>
         <Link to={'/all news/Political'} >
           <div className='post'>
                <img src='https://e1.pxfuel.com/desktop-wallpaper/313/348/desktop-wallpaper-details-of-the-new-parliament-building-india-parliament.jpg'/>
            
            </div>
            <p className='utext'>Political</p>
         </Link>
           </div>
           <div className='postko'>
             <Link to={'/all news/Business'}>
           <div className='post'>
                <img src='https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBuZXdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
               
            </div>
            <p className='utext'>Business</p>
            </Link>
           </div>
           <div className='postko'>
             <Link to={'/all news/Education'} >
           <div className='post'>
                <img src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGVkdWNhdGlvbiUyMG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
              
            </div>
            <p className='utext'>Education</p></Link>
           </div>
            <div className='postko'>
             <Link to={'/all news/Sports'} >
            <div className='post'>
                <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/360800/360829.jpg'/>
               
            </div>
                <p className='utext'>Sports</p></Link>
            </div>
            <div className='postko'>
             <Link to={'/all news/Cinemas'}>
            <div className='post'>
                <img src='https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
               
            </div>
            <p className='utext'>Cinemas</p>
            </Link>
            </div>
            <div className='postko'>
             <Link to={'/all news/Agriculture'}>
            <div className='post'>
                <img src='https://plus.unsplash.com/premium_photo-1668624623619-a16f5e15724d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
           
            </div>
            <p className='utext'>Agriculture</p>
            </Link>
            </div>
            <div className='postko'>
             <Link to={'/all news/Local'} >
            <div className='post'>
                <img src='https://thumbs.dreamstime.com/b/local-news-25068677.jpg'/>
             
            </div>
            <p className='utext'>Local News</p>
            </Link>
            </div>
            <div className='postko'>
             <Link to={'/all news/culture'} >
            <div className='post'>
                <img src='https://images.unsplash.com/photo-1585607344893-43a4bd91169a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
             
            </div>
            <p className='utext'>Culture</p>
            </Link>
            </div>
            </div>
    </div>
  )
}

export default All