import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Questions from './pages/Questions'
import AskQuestion from './pages/AskQuestion'
import DisplayQuestion from './pages/DisplayQuestion'
import Tags from './pages/Tags'
import Users from './pages/Users'
import UserProfile from './pages/UserProfile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Auth' element={<Auth/>} />
        <Route exact path='/Questions' element={<Questions/>} />
        <Route exact path='/AskQuestion' element={<AskQuestion/>} />
        <Route exact path='/Questions/:id' element={<DisplayQuestion/>} />
        <Route exact path='/Tags' element={<Tags/>} />
        <Route exact path='/Users' element={<Users/>} />
        <Route exact path='/Users/:id' element={<UserProfile/>} />

    </Routes>
  );
}

export default AllRoutes;