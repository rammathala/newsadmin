import React, { useEffect, useState } from 'react'
import './Login.css'
import logi from './logi.jpg'
import gbutton from'./gbuton.png'
import logo from './logo.jpg'
import {  useNavigate } from 'react-router-dom'
import { ArrowCircleRight, } from '@mui/icons-material'
import db, { auth, provider } from './firebase';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material'
function Login({setuser,admin,aid}) {
  const [noadm,setnoadm] = useState(false);

  const handleAuth = () => {
    if (!admin) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          if(result.user.email === aid.email)
          {
            setuser(result.user);
            localStorage.setItem('user',JSON.stringify(result.user));
          }
         else{
            setnoadm(true)
         }
          
        })
        .catch((error) => {
          alert(error.message);
        });  
    }
  };
  const navi = useNavigate()
  const goo = ()=>{
   
    if (admin.email == aid.email)
    {
      navi('/dashboard')
      console.log('ok to go')
    }
    else{
      console.log('not ok')
      localStorage.removeItem('user')
      setuser(null)
    }
  }

  return (
    <div className='Login'>
        <div className='Login_container'>
          <div className='Login_left'>
            <img src={logi} alt='Image'/>
          </div>
          <div className='login_right'>
          {noadm && <div  className={'noadm'}>
            <div className='nocar'>
              <img src=''/>
              <h2>You are not admin !</h2>
              <p>You don't have access as admin</p>
               <IconButton className='iconb'><CloseIcon onClick={()=>setnoadm(false)} className='closeb'/></IconButton>
              </div>
              </div>}
            <img className='imagelogo' src={logo} alt=''/>
            <h3>{!admin?'Welcome !':'Welcome back !'}</h3>
            <p>{!admin?'Login in to post the latest News':'Login successfull'}</p>
            {!admin?<>
                <button className='signin' onClick={handleAuth}>
                 <div>
                        <img src={gbutton}/>
                        Sign in with google
                    </div>
                    
                    </button>
                  
            </>:<>
            <div onClick={goo} className='goto'>
              <h2>welcome {admin.displayName}</h2>
              <p>Hover on the Arrow to hop-in to dashboard</p>
              <Button className='gobutton' ><ArrowCircleRight className='arr'/><p className='dashbo'>Go to dashboard</p></Button>
            </div>
            </>}
          
          </div>
        </div>
    </div>
  )
}

export default Login