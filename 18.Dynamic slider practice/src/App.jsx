import { useEffect, useState } from 'react';
import './App.css'
import staff from "./components/Data"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

function App() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let lastIndex = staff.length - 1
    if (index > lastIndex) {
      setIndex(0)
    }
    if (index < 0) {
      setIndex(lastIndex)
    }

  }, [index])

  return (
    <>
      <main className='w-full h-screen  flex justify-center relative items-center '>
        <button onClick={() => { setIndex(index + 1) }} className=" absolute z-50 hover:bg-[white] hover:text-[blue] transition duration-300 border-none  px-3 py-2 rounded-md cursor-pointer text-2xl text-white font-bold bg-[blue] right-50 top-1/2 transform translate-y-[-50%]">
          <FaAnglesRight />
        </button>
        <button onClick={() => { setIndex(index - 1) }} className="absolute z-50 hover:bg-[white] hover:text-[blue] transition duration-300 border-none  px-3 py-2 rounded-md cursor-pointer text-2xl text-white font-bold bg-[blue] left-50 top-1/2 transform translate-y-[-50%]">
          <FaAnglesLeft />
        </button>
        <div className="w-[60%] 
         overflow-hidden
                 relative rounded-2xl h-112.5 ">
          {staff.map((ele, idx) => {
            let position = 'nextSlide'
            if (idx === index) {
              position = 'activeSlide'
            }
            if (idx === index - 1 || (index === 0 && idx === staff.length - 1)) {
              position = 'prevSlide'
            }

            // Add "return" here:
            return (
              <div
                key={ele.id}
                className={`w-full border-2  bg-[white] text-center 
          absolute flex flex-col gap-5 items-center py-10 px-8 transition duration-300 ${position} top-0 left-0 h-full`}
              >
                <span className="absolute top-3 right-3 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-sm text-xs font-semibold text-white">
                  #{ele.id}
                </span>

                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  <img
                    src={ele.image}
                    alt={ele.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-bold text-slate-900 capitalize tracking-tight">
                    {ele.name}
                  </h3>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mt-0.5">
                    {ele.designation}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3 flex-1 line-clamp-3">
                    {ele.jd}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
