import React, { useCallback, useContext, useState } from 'react'
import { context } from './Contextapi'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export default function Render() {
  const { form, setForm, editId, setEditId, total } = useContext(context)



    function del(index) {
      let updatedArray = form.filter((ele, idx) => {
        return idx != index
      })
      setForm(updatedArray)

    }



  function edit(index) {

    setEditId(index)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {form.map((ele, index) => (
        <div
          key={ele.id || index}
          className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
        >
          <div>
            {/* Header: Task Number & Date */}
            <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100">
                Task #{ele.number}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {ele.date}
              </span>
            </div>

            {/* Task Details */}
            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {ele.task}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Edit Button */}
            <button
              onClick={() => { edit(index) }}
              type="button"
              className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              title="Edit Task"
            >
              <FaEdit className="w-5 h-5" />
            </button>

            {/* Delete Button */}
            <button
              onClick={() => { del(index) }}
              type="button"
              className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20"
              title="Delete Task"
            >
              <MdDelete className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
