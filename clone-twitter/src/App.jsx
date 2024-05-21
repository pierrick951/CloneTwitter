import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import UserProfile from './Components/UserProfile/UserProfile';
import Messagerie from './Components/Messagerie/Messagerie'
import Bookmark from './Components/Bookmark/Bookmark'
import NotFound from '../src/Components/NotFound/NotFound'


export default function App()  {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/message' element={<Messagerie/>}/>
       <Route path='/bookmark' element={<Bookmark/>}/>
       <Route path='/userprofile' element={<UserProfile/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}