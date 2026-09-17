import React, { createContext, useState } from 'react'

export const context = createContext()
function Contextapi({ children }) {
    const [sideBar, setSidebar] = useState(false)
    const [cart, setCart] = useState([])
    return (
        <context.Provider value={{ sideBar, setSidebar,cart, setCart }}>
            {children}
        </context.Provider>
    )
}

export default Contextapi