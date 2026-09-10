import React, { useContext } from 'react'
import { context } from './Contextapi'

function Checktours() {
  const { tours, setTours } = useContext(context)
  let formTitle = localStorage.getItem("formTitle")
  let price = localStorage.getItem("total1")
  function deleteTour(idx) {
    let newTours = tours.filter((ele, idxx) => {
      return idxx != idx


    })
    setTours(newTours)


  }



  return (

    <>
      {
        tours.map((ele, idx) => {
          return (
            <div className="max-w-sm mt-20 mx-auto my-6 bg-white rounded-xl shadow-md border border-gray-100 p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md tracking-wide uppercase">
                {ele.date}
              </div>


              <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                {formTitle}
              </h2>

              <div className="space-y-2 pt-2 border-t border-gray-100 text-sm">
                <div className="flex items-center space-x-2.5 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{ele.email}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-gray-600 hover:text-gray-900 transition-colors">
                  <i className="fa-regular fa-user"></i>

                  <span className="truncate">{ele.fullName}</span>
                </div>


                <div className="flex items-center space-x-2.5 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{ele.phoneNumber}</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Total Price:</h4>
                  <span className="text-lg font-bold text-gray-900">${price}</span>
                </div>
              </div>
              <div>
                <button

                  type="button"
                  onClick={() => { deleteTour(idx) }}
                  class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 active:bg-red-200 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Delete"
                >
                  <i className="ri-delete-bin-line text-lg leading-none"></i>
                </button>
              </div>
            </div>
          )

        })
      }

    </>

  )
}

export default Checktours