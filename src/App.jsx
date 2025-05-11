import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';

function App() {

  
  const sessionUser = sessionStorage.getItem("user");

  return (
    <>
      <NavBar />
      <div className='mainContainer'>
        <Outlet />
      </div>
      {
        !sessionUser ? <Footer /> : ''
      }
    </>
  )
}

export default App
