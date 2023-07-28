import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './ConfirmOrder.module.css'

import CartContext from '../../Store/CartContext';
import CartItem from './CartItem';

export default function ConfirmOrder(props) {



  const cartCtx = useContext(CartContext);
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems=cartCtx.items.length > 0;

  const cartItemRemoveHandler=id=>{

  }
  const cartItemAddHandler=item=>{

  }
  const cartItem=(cartCtx.items).map(item=>(
    <CartItem id={item.id} name={item.name} amount={item.amount} description={item.description} onRemove={cartItemRemoveHandler.bind(null ,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
  ))

  
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
      <span >Total Amount</span>
      <span>{totalAmount}</span>
      </div>
      
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems &&< button className={classes.button}>Confirm Order</button>}
      </div>
    </Modal>
  )
}
