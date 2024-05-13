import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import UserProfile from './Components/UserProfile/UserProfile';
import NotFound from '../src/Components/NotFound/NotFound'


export default function App()  {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/userprofile' element={<UserProfile/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}