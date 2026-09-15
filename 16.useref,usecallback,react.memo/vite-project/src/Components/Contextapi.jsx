import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
export const context = createContext()
export default function Contextapi({ children }) {
    const [form, setForm] = useState([])
    const [editId, setEditId] = useState(null)
    const [data, setData] = useState({
        number: "",
        date: "",
        task: "",

    });
    useEffect(() => {

        localStorage.setItem("data", JSON.stringify(form))

    }, [form])

    useEffect(() => {
        if (editId != null) {
            let editEle = form.find((ele, idx) => {
                return idx == editId
            })
            setData(editEle)


        }

    }, [editId])



   

    return (
        <>
            <context.Provider value={{ form, setForm, editId, setEditId, data, setData }}>
                {children}
            </context.Provider>
        </>)
}
