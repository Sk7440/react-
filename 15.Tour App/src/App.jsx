import React from 'react'
import Navbar from './components/Navbar'
import MAin from './components/MAin'
import Checktours from './components/Check tours'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans flex flex-col min-h-screen">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<MAin />} />
          <Route path='/check-tours' element={<Checktours />} />



        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App