import React from 'react'
import Navbar from './components/Navbar'
import MAin from './components/MAin'
import Footer from './components/Footer'
import Checktours from './components/Check tours'

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans flex flex-col min-h-screen">
      <Navbar />


      <MAin />
      <Footer />
      <Checktours/>
    </div>
  )
}

export default App