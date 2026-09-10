import React, { createContext, useEffect, useState } from 'react'
export const context = createContext()
function Contextapi({ children }) {
    const [tours, setTours] = useState([])
    useEffect(()=>{
    localStorage.setItem("tours", JSON.stringify(tours))

    }, [tours])
    return (
        <context.Provider value={{
           tours, setTours
        }
        }>
            {children}
        </context.Provider>)
}

export default Contextapi