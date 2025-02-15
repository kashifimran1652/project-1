import React from 'react'
import Front from './components/Front'
import Exp from './components/Exp'
import Cont from './components/Cont'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Front />} />
    <Route path='/exp' element={<Exp />} />
    <Route path='/cont' element={<Cont />} />







    </Routes>
    
    
    
    
    
    
    
    
    
    
    
    </BrowserRouter>

















    {/* <Front />
    <Exp />
    <Cont /> */}
    
    </div>
  )
}
