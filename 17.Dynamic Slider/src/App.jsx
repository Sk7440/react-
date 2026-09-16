import { useEffect, useState } from 'react'
import people from './components/Data'
import Next_Btn from './components/Next Btn'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

function App() {

  let [index, setIndex] = useState(0)

  useEffect(() => {
    let lastIndex = people.length - 1
    if (index > lastIndex) {
      setIndex(0)
    }
    if (index < 0) {
      setIndex(lastIndex)
    }

  }, [index])

  return (
    <>
      <main className='w-full h-[100vh] bg-[gray] flex justify-center relative items-center '>
        <button className=" absolute z-50 hover:bg-[white] hover:text-[blue] transition duration-300 border-none  px-3 py-2 rounded-md cursor-pointer text-2xl text-white font-bold bg-[blue] right-[200px] top-1/2 transform translate-y-[-50%]">
          <FaAnglesRight />
        </button>
        <button className="absolute z-50 hover:bg-[white] hover:text-[blue] transition duration-300 border-none  px-3 py-2 rounded-md cursor-pointer text-2xl text-white font-bold bg-[blue] left-[200px] top-1/2 transform translate-y-[-50%]">
          <FaAnglesLeft />
        </button>
        <div className="w-[60%]
         overflow-hidden
                 relative rounded-2xl h-[450px] border-8 ">




          {
            people.map((ele, idx) => {

              let position = 'nextSlide'
              if (idx === index) {
                position = 'activeSlide'
              }
              if (idx === index - 1 || (index === 0 && idx === people.length - 1)) {
                position = 'prevSlide'
              }
              console.log(idx, position);
              return (
                <article key={idx} className={`w-full border-2  border-yellow-400 bg-[white] text-center 
                 absolute flex flex-col gap-5 items-center py-10 px-8  transition duration-300  ${position} top-0 left-0 h-full `}>
                  <img className='w-[150px] h-[150px] object-cover object-center rounded-full' src={ele.image} alt={ele.name} />
                  <h1 className='font-bold text-2xl'>
                    {ele.id}
                  </h1>
                  <h1 className='font-bold text-2xl'>
                    {ele.name}
                  </h1>
                  <h2 className='text-lg'>
                    {ele.title}
                  </h2>
                  <p className='text-[gray]'>
                    {ele.quote}
                  </p>
                </article>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default App
