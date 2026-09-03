import React from 'react'
import Navbar from './components/Navbar'
import MAin from './components/MAin'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans flex flex-col min-h-screen">
      <Navbar />


      <MAin />
{}
      <Footer />
    </div>
  )
}

export default App