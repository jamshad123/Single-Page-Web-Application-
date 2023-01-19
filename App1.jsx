import React from 'react'
import Home from './Home'
import Navbar1 from './Navbar'
import Register from './Register'
import { BrowserRouter, Route, Routes } from'react-router-dom';
import Login from './Login';
import { createContext } from 'react';


const newContext=createContext();

function App1() {
    
    const name="Jamshad"
  return (
    <div>
        <newContext.Provider value={name}>    
        <BrowserRouter>
        <Navbar1/>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </BrowserRouter>
        </newContext.Provider>
    </div>
  )
}

export default App1
export {newContext}