import React from 'react'
import CartContext from './CartContext'
import { useReducer } from 'react'

const defaultCartState={
  items:[],
  totalAmount:0
};

const cartReducer=(state,action)=>{
  if(action.type==='ADD'){
    const updatedItems=state.items.concat(action.item);
    const updatedAmount=state.totalAmount + action.item.price*action.item.amount;
    return {
      items:updatedItems,
      totalAmount:updatedAmount
    }
  }
  return defaultCartState
}

 const CartProvider= props =>{
  const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
   
  const additemtoCartHandler=item=>{
    dispatchCartAction({
      type:'ADD',
      item:item
    })
        
    }
    const removeitemtoCartHandler=id=>{
      dispatchCartAction({
        type:'REMOVE',
        id:id
      })
    }
    const cartContext={
        items:cartState.items,
    totalAmount: cartState.totalAmount,
    addItem:additemtoCartHandler,
    removeItem:removeitemtoCartHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider;