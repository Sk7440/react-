import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import Navbar from './Components/Navbar'
import Inputs from './Components/Inputs'
import Render from './Components/render'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-slate-100">

          <Navbar />
          <Inputs />
<Render/>
        </div>
      </div>

    </>
  )
}

export default App