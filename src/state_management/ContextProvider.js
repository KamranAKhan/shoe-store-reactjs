import React, {useReducer} from 'react';
import {CartContext} from './CartContext';
import CartReducer from './CartReducer';

function ContextProvider({ children }){

    const [state, dispatch] = useReducer(CartReducer, []);

    function addToCart(cartObj){
        dispatch({
            type: 'ADD_TO_CART',
            payload: cartObj
        })
    }

    function deleteFromCart(index){
        dispatch({
            type: 'DELETE_FROM_CART',
            payload: index
        })
    }

    function updateFromCart(cartObj){
        dispatch({
            type: 'UPDATE_FROM_CART',
            payload: cartObj
        })
    }

    return(
        <CartContext.Provider value={
            {
                cart: state,
                addToCart,
                deleteFromCart,
                updateFromCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
    
}

export default ContextProvider;

