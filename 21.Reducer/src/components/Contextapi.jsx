import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import { Reducerfunc } from './Reducerfunc'

export const context = createContext()
function Contextapi({children}) {
  const initialState = {
      cart: [],
      totalPrice: 0
    }
    const [state, dispatch] = useReducer(Reducerfunc, initialState)

  return (
    <context.Provider value={{
           state, dispatch                              
        }
        } >

      {children}
    </context.Provider>
  )
}

export default Contextapi