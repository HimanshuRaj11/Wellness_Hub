import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Register from './Pages/Register/Register';
import { Route, Routes } from "react-router-dom"
import { useSelector } from 'react-redux';
import Home from './Pages/Home/Home';
import "./bootstrap.css"
import "./style.css"
import "./style1.css"
import "./responsive.css"
import Footer from './components/Footer/Footer';
import ProfileDoctor from './Pages/Profile/Profile.doctor';
import FindaDoctor from './Pages/FindADoctor/FindaDoctor';
import DoctorProfilepage from './Pages/Profile/Doctor-profile';


export default function App() {
  const { User: { user } } = useSelector((state) => ({ ...state.User }));
  return (
    <div className="containerPage">
      <Navbar />

      <Routes>
        <Route excat path='/' element={<Home />} />
        <Route excat path='/register' element={<Register />} />
        <Route excat path='/profile' element={<ProfileDoctor />} />

        <Route excat path='/doctor/:_id' element={<DoctorProfilepage />} />
        <Route excat path='/find-a-doctor' element={<FindaDoctor />} />
      </Routes>

      <Footer />

    </div>

  )
}
