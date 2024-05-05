import React, { useState } from 'react'
import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import write from './writing.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import db, { storage } from './firebase'
import correct from './correct.png'
import { serverTimestamp } from 'firebase/firestore'
import toast,{Toaster} from 'react-hot-toast';
import news from './newspaper.png'
function Local({admin,aid,setuser}) {
  const [title ,settitle] = useState('')
  const [desc ,setdesc] = useState('')
  const [image ,setimage] = useState()
  const [subtitle ,setsubtitle] = useState('')
  const [artlink ,setartlink] = useState('')
  const [pop, setpop] = useState(false)
  const lappend = (e)=>{
    e.preventDefault();
    if (admin.email === aid.email){
  
    db.collection('Local').add({
      title:title,
      Stitle:subtitle,
      image:'',
      description:desc,
      artlink:artlink,
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
    setdesc('')
    setsubtitle('')
    setpop(true)
    setartlink('')
  }
      else{
        localStorage.removeItem('user')
        setuser(null)
      }
}
  const upload =(docid)=>{
    const uploadtask = storage.ref('images-local')
    .child(image.name)
    .put(image);
    uploadtask.on(
      "state_changed",
      (snapshot)=>{
        const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        toast.success('Uploading'+ progress +'%')
      },
      (err)=>{
        console.log(err)
      },()=>{
        storage.ref('images-local').child(image.name).getDownloadURL().then(imageurl=>{
           db.collection('Local').doc(docid).update({
            image:imageurl
           })
        })
        toast.success('Successfully Uploaded the news!')
        setpop(false)
      }
    )
   
  } 
  const changefile = (e)=>{
    setimage(e.target.files[0])
}

  return (
    <div className='Political'>
      <div className='form'>
           <form onSubmit={lappend}>
            <h2>Local News <img src={write}></img></h2>
            <h5>News Title:</h5>
            <input type='text' value={title} required onChange ={(e)=>settitle(e.target.value)}/>
            <h5>Sub Title:</h5>
                <input type='text' autoFocus value={subtitle} required onChange={(e)=>setsubtitle(e.target.value)}/>
            <h5>News Description:</h5>
            <textarea value={desc} required onChange ={(e)=>setdesc(e.target.value)}></textarea>
            <h5>Upload Photos</h5>
            <input type='file' required onChange ={changefile}/>
            <h5>Article links</h5>
            <input type='text' value={artlink} onChange ={(e)=>setartlink(e.target.value)}/>
            <Button disabled={pop} variant='contained'type='submit'>Post</Button>
            <Link to={'/dashboard'}><IconButton className='bacarr'><KeyboardBackspaceIcon className='bacarr1'/></IconButton></Link>
            { pop && <div className='alert'>
              <div className='left'>
              <img width="48" height="48" src="https://img.icons8.com/color/48/general-warning-sign.png" alt="general-warning-sign"/>
              </div>
              <div className='aright'>
              <p className='wait'>Please Wait!</p>
              <p>News Article is uploading...</p>
              </div>
              
              </div>}  
           </form>
           <Toaster position="top-right"
  reverseOrder={false}/>
    </div>
    
</div>
  )
}

export default Local
