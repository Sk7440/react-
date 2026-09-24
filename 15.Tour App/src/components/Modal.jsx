import React, { useContext, useState } from 'react'
import { context } from './Contextapi';

const Modal = ({ form, closeModal }) => {
  const { tours, setTours } = useContext(context)
  const [data, setdata] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    date: "",
    numberofPersons: "",

  });
  function handling(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function formHandle(e) {

    e.preventDefault()
    setTours((prev) => [...prev, data])



    localStorage.setItem("total1", JSON.stringify(total))
    localStorage.setItem("formTitle", JSON.stringify(form.title))
    alert("Form submitted ")
    closeModal()


  }


  const [total, setTotal] = useState(Number(form.details.price))

  function cost(e) {
    setTotal(Number(e.target.value) * form.details.price)
  }


  return (

    <>
      <section className="fixed inset-0 top-10 bg-black/50 overflow-y-auto p-4 z-50">

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 my-10">
          <button onClick={() => {
            closeModal()
          }}>
            <i className="fa-solid fa-arrow-left text-sm"></i>

          </button>
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Book Your Tour</h2>
            <p className="text-gray-500 text-sm mt-1">
              Fill out the details below to reserve your spot for <span className="font-semibold text-emerald-600">Swiss Alps Adventure</span>.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => {
            formHandle(e)
          }}>

            {/* Full Name & Email & Tour details*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Tour Tilte
                </label>
                <div className="relative">

                  <h3 className="w-full pl-2 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none">{form.title}</h3>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Tour Price /Per Person
                </label>
                <div className="relative">

                  <h3 className="w-full pl-2 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none">${form.details.price}</h3>

                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name='fullName'
                    onChange={
                      (e) => { handling(e) }
                    }
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name='email'
                    onChange={
                      (e) => { handling(e) }

                    }
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <i className="fa-solid fa-phone text-xs"></i>
                  </span>
                  <input
                    type="tel"
                    name='phoneNumber'
                    onChange={
                      (e) => { handling(e) }

                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <i className="fa-regular fa-calendar"></i>
                  </span>
                  <input
                    type="date"
                    name='date'
                    onChange={
                      (e) => { handling(e) }

                    }
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                Number of Persons
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <i className="fa-solid fa-user-group text-xs"></i>
                </span>
                <input type="number"
                  name='numberofPersons'
                  onChange={(e) => { cost(e) }}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none"
                />

              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                Total Price
              </label>
              <div className="relative">

                <h3 className="w-full pl-2 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 outline-none">{Number(total)}</h3>

              </div>
            </div>



            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm Booking</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>

          </form>
        </div>
      </section>

    </>
  )
}

export default Modal