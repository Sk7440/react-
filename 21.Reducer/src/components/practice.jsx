import React, { useReducer } from 'react'
import ReducerFn from './ReducerFn'

function App() {

  const initialState = {
    allProducts: [],
    page: 0,
    liveProducts: [],
    totalPages: 0,
    cart: [],
    totalPrice: 0
  }
  const [state, dispatch] = useReducer(ReducerFn, initialState)
  console.log(state);
  


  return (
    <div>
      <button onClick={()=> dispatch({type: 'ADD_TO_CART', payload: {id: 1}})}>
        click
      </button>
      {
        state.cart.map((ele,idx)=>{
          return (
            <div>
              <h1>
                {ele.title}
              </h1>
              <p>
                {ele.price}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App