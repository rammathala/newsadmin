
import  React, { useState } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ClearIcon from '@mui/icons-material/Clear';
import './Pdf.css'
import { IconButton } from '@mui/material';
import db, { storage } from './firebase';
import toast,{Toaster} from 'react-hot-toast';
import UploadIcon from '@mui/icons-material/Upload';
import { Link } from 'react-router-dom';
function Pdf() {
const [wait , setwait] =useState(false)
  const uploadpdf = (e) =>{
    setwait(true)
 if(file){
  console.log(name)
  console.log(file)
  db.collection('pdfs').add({
    pdfname:name,
    pdf:'',
  }).then((docRef)=> {
    const docid = docRef.id
    upload(docid)
})
  setfile('')
  setname('')
 }
   
  }
  
 
  const upload =(docid)=>{
    const uploadtask = storage.ref('News-pdf')
    .child(file.name)
    .put(file);
    uploadtask.on(
      "state_changed",
      (snapshot)=>{
        const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        toast.success('Uploading'+ progress +'%')
      
      },
      
      (err)=>{
        console.log(err)
      },()=>{
        storage.ref('News-pdf').child(file.name).getDownloadURL().then(url=>{
           db.collection('pdfs').doc(docid).update({
            pdf:url
           })
        })
        toast.success('Successfully Uploaded the file!')
        setwait(false)
      }
    )
   
  } 
  const[name,setname] = useState('')
  const[file,setfile] = useState()
  return (
    <div className='ps'>
      <div>
        <h2>Upload</h2>
      </div>
      <form >
        <div className='psy1' onClick={()=>{
        document.querySelector('.inpuuu').click()
      }}>
        <DriveFolderUploadIcon className='upfi'/>
        <input type='file' hidden className='inpuuu' onChange={({target:{files}})=>{
          setname(files[0].name)
            if(files){
              setfile(files[0])  
            }
        
        }}/>
        <h4>Upload News pdf here</h4>
        <h5>Attach your files here</h5>
        </div>
        <div className='finote'>
          <div>
          <h5>{file?name:'file name'}</h5>
          {file && <PictureAsPdfIcon className='pdfshow'/>}
          </div>
          
         {file && <IconButton onClick={()=>{
            setfile('')
          }}><ClearIcon className='delf'/></IconButton>}
        </div>
        <div className='psy2'>
        <Button disabled={!file} onClick={uploadpdf} endIcon={<UploadIcon/>} variant='contained'  className='uplo'>Upload File</Button>
        <Toaster position="top-right"
  reverseOrder={false}/>
        </div>
   
      </form>
    { wait && <h5 className='waitm'>Please Wait it's uploading.. </h5>}
    <Link to={'/uploads'} className='getback'>Back to Uploads</Link>
    </div>
  )
}

export default Pdf


