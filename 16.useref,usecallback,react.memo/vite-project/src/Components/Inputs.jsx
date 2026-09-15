import React, { useContext, useEffect, useRef, useState } from 'react'
import { context } from './Contextapi';

export default function Inputs() {
    const { form, setForm, editId, setEditId } = useContext(context)
    const inpRef = useRef(null)


    const { data, setData } = useContext(context)







    function handling(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    function submision(e) {
        e.preventDefault()

        if (editId != null) {
            let updatedForm = form.map((ele, idx) => {
                if (idx == editId) {
                    return {
                        ...ele, ...data
                    }
                }
                return ele
            })
            setForm(updatedForm)
            setEditId(null)
            setData({
                number: "",
                date: "",
                task: "",

            })

        }
        else {
            setForm((prev) => [...prev, data])

            setData({
                number: "",
                date: "",
                task: "",

            })

        }




    }
    useEffect(() => {
        inpRef.current.focus()

    }, [])

    return (
        <>
            <form action="">
                <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md border border-slate-100 space-y-4">
                    <div>
                        <input
                            onChange={(e) => {
                                handling(e)
                            }}
                            name='number'
                            value={data.number}
                            ref={inpRef}
                            required
                            type="text"
                            placeholder="enter task number"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            name='date'
                            onChange={(e) => { handling(e) }}
                            value={data.date}
                            required
                            type="date"
                            placeholder="enter current date"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        />
                    </div>
                    <div>
                        <textarea
                            name='task'
                            onChange={(e) => { handling(e) }}
                            placeholder="enter your task"
                            rows="4" required
                            value={data.task}

                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                        ></textarea>
                    </div>
                </div>
                <button onClick={(e) => {
                    submision(e)
                }} type='submit' className="w-full mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium rounded-lg shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-150 ease-in-out">
                    {editId == null ? 'Submit' : 'Update'}
                </button>
            </form>

        </>
    )
}
