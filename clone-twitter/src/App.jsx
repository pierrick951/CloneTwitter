import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import UserProfile from './Components/UserProfile/UserProfile';
import Messagerie from './Components/Messagerie/Messagerie'
import Grok from './Components/Grok/Grok'
import Bookmark from './Components/Bookmark/Bookmark'
import Prenium from './Components/Prenium/Prenium'
import NotFound from '../src/Components/NotFound/NotFound'


export default function App()  {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/message' element={<Messagerie/>}/>
       <Route path='/grok' element={<Grok/>}/>
       <Route path='/bookmark' element={<Bookmark/>}/>
       <Route path='/prenium' element={<Prenium/>}/>
       <Route path='/userprofile' element={<UserProfile/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}