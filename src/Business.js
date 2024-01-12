import React, { useState } from 'react'
import { Button, IconButton } from '@mui/material'
import db, { storage } from './firebase'
import { Link } from 'react-router-dom'
import write from './writing.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import correct from './correct.png'
import news from './newspaper.png'
import { serverTimestamp } from 'firebase/firestore'
function Business({admin,aid,setuser}) {
  const [title ,settitle] = useState('')
  const [subtitle ,setsubtitle] = useState('')
  const [desc ,setdesc] = useState('')
  const [image ,setimage] = useState('')
  const [artlink ,setartlink] = useState('')
  const [pop, setpop] = useState(false)
  const bappend = (e)=>{
    e.preventDefault();
    if (admin.email === aid.email){
    db.collection('Business').add({
      title:title,
      Stitle:subtitle,
      image:'',
      description:desc,
      links:artlink,
      date:serverTimestamp()
    }).then((docRef)=> {
      const docid = docRef.id
      upload(docid)
     
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
    settitle('')
    setimage('')
    setsubtitle('')
    setdesc('')
    setartlink(' ')
    setpop(true)
    setTimeout(popout,1500)
  }

else{
  localStorage.removeItem('user')
  setuser(null)
}}
  const upload =(docid)=>{
    const uploadtask = storage.ref('images-Business')
    .child(image.name)
    .put(image);
    uploadtask.on(
      "state_changed",
      (snapshot)=>{
       
      },
      (err)=>{
        console.log(err)
      },()=>{
        storage.ref('images-Business').child(image.name).getDownloadURL().then(imageurl=>{
           db.collection('Business').doc(docid).update({
            image:imageurl
           })
        })
      }
    )
   
  } 
  const changefile = (e)=>{
    setimage(e.target.files[0])
}
const changelin = (e)=>{
 setartlink(e.target.value)
}
  const popout = ()=>{
    setpop(false)
  }
  return (
    <div className='Political'>
       {pop ? (<div className='popale' >
          <div className='popcard'>
            <img className='neico' src={news}/>
          <p> News Added successfully </p>
          <img src={correct}/>
      </div>  
         
        </div>):( <div className='form'>
           <form onSubmit={bappend}>
           <h2> Business News <img src={write}></img> </h2>
            <h5>News Title:</h5>
            <input type='text' value={title} required onChange ={(e)=>settitle(e.target.value)}/>
            <h5>Sub Title:</h5>
                <input type='text' autoFocus value={subtitle} required onChange={(e)=>setsubtitle(e.target.value)}/>
            <h5>News Description:</h5>
            <textarea value={desc} required onChange ={(e)=>setdesc(e.target.value)}></textarea>
            <h5>Upload Photos</h5>
            <input type='file' required onChange ={changefile}/>
            <h5>Article links</h5>
            <input type='text' value={artlink} onChange ={changelin}/>
            <Button variant='contained'type='submit'>Post</Button>
            <Link to={'/dashboard'}><IconButton className='bacarr'><KeyboardBackspaceIcon className='bacarr1'/></IconButton></Link> 
           </form>
           
    </div>)}
   
</div>
  )
}

export default Business