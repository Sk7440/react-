import { createContext, useState } from "react";

export const homeContext  = createContext()


export default function HomeProvider({children}){
    const [count, setCount]  = useState(0)
    return (
        <homeContext.Provider value={{
            count, setCount
        }}>
            {children}
        </homeContext.Provider>
    )
}