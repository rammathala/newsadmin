import React, { useState } from 'react'
import './Po.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material'
import db, { storage } from '../firebase';
function Ao({title,image,desc,stamp,id,stitle,links}) {
  const[edit ,setedit] = useState(false)
  const [title1,settitle1] = useState(title)
  const [stitle1,setstitle1] = useState(stitle)
  const [desc1,setdesc1] = useState(desc)
  const [art1,setart1] = useState('')
  const [image1,setimage1] = useState('')
    const stamps = new Date(stamp.toDate()).toLocaleString()
    function del(){
        if(window.confirm('Are you sure?')){
            db.collection('Agricultural').doc(id).delete();
        }
       
       
    }
    const edit1 = () =>{
      setedit(true)
    } 
  function update1(e){
      e.preventDefault()
       db.collection('Agricultural').doc(id).set({
         Stitle:stitle1,
         title:title1,
         description:desc1,
         artlink:art1
         
     },{merge:true}).then(
       alert('updated')
     )
   setedit(false)
   };
    

   const changefile1 = (e)=>{
     setimage1(e.target.files[0])
 }

 const upload =(id)=>{
   const uploadtask = storage.ref('images')
   .child(image.name)
   .put(image);
   uploadtask.on(
     "state_changed",
     (snapshot)=>{
      
     },
     (err)=>{
       console.log(err)
     },()=>{
       storage.ref('images').child(image.name).getDownloadURL().then(imageurl=>{
          db.collection('Political').doc(id).update({
           image:imageurl
          })
       })
     }
   )
  
 } 
  return (
   <div className='Poo'>
     {edit ?
      <div className='form'>
           <form onSubmit={update1} >
            <h5>News Title:</h5>
            <textarea type='text' className='textarea' value={title1} onChange={(e)=>settitle1(e.target.value)} />
            <h5>Sub Title:</h5>
                <textarea className='textarea' type='text' autoFocus  value={stitle1} onChange={(e)=>setstitle1(e.target.value)} />
            <h5>News Description:</h5>
            <textarea  value={desc1} onChange={(e)=>setdesc1(e.target.value)} ></textarea>
            <h5>Upload Photos</h5>
            <input type='file' onChange={changefile1}/>
            <img src={image}/>
            <h5>Article links</h5>
            <input type='text' value={art1} onChange={(e)=>setart1(e.target.value)} />
            <Button variant='contained'  type='submit'>Post</Button>
            <Button variant='contained' onClick={()=>setedit(false)}>Cancel Edit</Button>
           </form>
    </div>

   :
<div className='Po' key={id}>
    <h1>{title}</h1>
    <h3>{stitle}</h3>
 <h5 className='date'>{stamps}</h5>
<img src={image} alt='Image'/>
<h5>Image: {title}</h5>
<p className='descr'>{desc}</p>
<p className='rlar'>Related articles: {links && <a className='linksoo' target='__blank' href={links}>{links}</a>} </p>
<div className='buttons'>
  <Button className='but1' variant='contained' onClick={edit1}> <EditIcon/></Button> 
  <Button className='but2' variant='contained' onClick={del} startIcon={<DeleteForeverIcon/>}>
  delete
</Button>

</div>
</div>}
</div> 
  )
}

export default Ao