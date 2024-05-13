import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import UserProfile from './Components/UserProfile/UserProfile';
import Discover from './Components/Discover/Discover';
import Notification from './Components/Notification/Notification'
import Messagerie from './Components/Messagerie/Messagerie'
import Grok from './Components/Grok/Grok'
import List from './Components/Listt/Listt'
import Bookmark from './Components/Bookmark/Bookmark'
import Community from './Components/Community/Community'
import Prenium from './Components/Prenium/Prenium'
import More  from './Components/More/More'
import NotFound from '../src/Components/NotFound/NotFound'


export default function App()  {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/discover' element={<Discover/>}/>
       <Route path='/notification' element={<Notification/>}/>
       <Route path='/message' element={<Messagerie/>}/>
       <Route path='/grok' element={<Grok/>}/>
       <Route path='/list' element={<List/>}/>
       <Route path='/bookmark' element={<Bookmark/>}/>
       <Route path='/community' element={<Community/>}/>
       <Route path='/prenium' element={<Prenium/>}/>
       <Route path='/userprofile' element={<UserProfile/>}/>
       <Route path='/More' element={<More/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}