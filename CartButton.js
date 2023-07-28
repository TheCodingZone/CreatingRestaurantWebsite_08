import React from 'react'
import CartIcon from './CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react';
import CartContext from '../../Store/CartContext'

export default function CartButton(props) {
    const cartCtx=useContext(CartContext);
  const numOfcartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
  return (
    // 
    <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{numOfcartItems}</span>
        
      
    </button>
  )
}
