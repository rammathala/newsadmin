
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Dash from './Dash';

import Login from './Login';
import Political from './Political';
import Education from './Education';
import Local from './Local';
import Sports from './Sports';
import Culture from './Culture';
import Cinema from './Cinema';
import Agriculture from './Agriculture';
import Business from './Business';
import db, { auth, provider } from './firebase';
import { useEffect, useState } from 'react';
import All from './All';
import Politicalview from './All news/Politicalview';
import Businessview from './All news/Businessview';
import Sportsview from './All news/Sportsview';
import Cinemaview from './All news/Cinemaview';
import Cultureview from './All news/Cultureview';
import Localview from './All news/Localview';
import Agricview from './All news/Agricview';
import Educationview from './All news/Educationview';
import Pdf from './Pdf';
import Pdfsec from './Pdfsec';
import Viewpdf from './Viewpdf';
function App() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));
  const [aid, setid] = useState('')
 
  useEffect(()=>{
    db.collection('Admin').doc('cGhwDcpRIbcPYDoMkLme').get().then((snapshot)=>setid(snapshot.data()))

   console.log(aid.email)
  },[]);
  const logoout = () => {
    auth.signOut().then(
      setuser(null),
      localStorage.removeItem('user')
    )
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
            <Route  path="/" element={ <Login setuser={setuser} admin={user} aid = {aid}/> }/>
            <Route path={user &&'/dashboard'} element={<Dash admin={user}  logoout={logoout}/> } />
            <Route path={user &&'/post Political news'} element={<Political setuser={setuser} admin={user} aid = {aid}/>} />
            <Route path={user &&'/post Educational news'} element={<Education setuser={setuser} admin={user} aid = {aid}/>}/>
            <Route path={user &&'/post Local news'} element={<Local setuser={setuser} admin={user} aid = {aid}/>} />
            <Route path={user &&'/post sports news'} element={<Sports setuser={setuser} admin={user} aid = {aid}/>} />
            <Route path={user &&'/post traditional news'} element={<Culture setuser={setuser} admin={user} aid = {aid}/>} />
            <Route path={user &&'/post cinema news'} element ={<Cinema setuser={setuser} admin={user} aid = {aid}/>} />
            <Route path={user &&'/post agriculture news'} element={<Agriculture setuser={setuser} admin={user} aid = {aid}/>} />
            <Route path={user &&'/post Business news'}  element={<Business setuser={setuser} admin={user} aid = {aid}/>}/>
            <Route path={user &&'/all news'}  element={<All/>}/>
            <Route path={user &&'/all news/Political'}  element={<Politicalview/>}/>
            <Route path={user &&'/all news/Business'}  element={<Businessview/>}/>
            <Route path={user &&'/all news/Sports'}  element={<Sportsview/>}/>
            <Route path={user &&'/all news/Cinemas'}  element={<Cinemaview/>}/>
            <Route path={user &&'/all news/Education'}  element={<Educationview/>}/>
            <Route path={user &&'/all news/Agriculture'}  element={<Agricview/>}/>
            <Route path={user &&'/all news/Local'}  element={<Localview/>}/>
            <Route path={user &&'/all news/culture'}  element={<Cultureview/>}/>
            <Route path={user &&'/uploads'}  element={<Pdfsec/>}/>
            <Route path={user &&'/upload pdf'}  element={<Pdf/>}/>
            <Route path={user &&'/view pdf'}  element={<Viewpdf/>}/>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
     </div>
     </BrowserRouter>
  );
}

export default App;
