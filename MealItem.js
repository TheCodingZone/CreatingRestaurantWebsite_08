import React from 'react'
import classes from '../MEALS/MealItem.module.css';
import MealButton from './MealButton';
import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
 const MealItem=(props) =>{
    const price=`$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

 
  return (
    <div>
      <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.id}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealButton onAddToCart={addToCartHandler} />
    </li>
    </div>
  )
}
export default MealItem;