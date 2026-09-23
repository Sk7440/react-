import React from 'react'

export default function ReducerFn(state, action) {
    
    console.log(action);
    console.log(state);

    switch (action.type) {
        case 'ADD_TO_CART':
            if (action.payload.id == 1) {
                
                return {
                    ...state, cart: [{id:1, title: 'mobile', price: 23 }] 
                }
            }

            break;
    
        default:
            break;
    }
}
