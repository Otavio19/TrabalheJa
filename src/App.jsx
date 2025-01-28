import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <NavBar />

      <div className='mainContainer'>
        <Outlet />
      </div>

    </>
  )
}

export default App
