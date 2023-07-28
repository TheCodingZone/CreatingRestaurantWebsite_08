// import React, { useContext } from 'react'
// import Card from '../UI/Card';

//
// import MealButton from './MealButton';
// import CartContext from '../../Store/CartContext';


//  const meal=(props)=> {
  
//   const cartCtx=useContext(CartContext);
//   const addToCartHandler=(amount)=>{
//    cartCtx.addItem({
//   id:props.id,
//   name:props.name,
//   amount:amount,
//   price:props.price
// });
// }
//     const DUMMY_MEALS = [
//       {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//       },
//         {
//           id: 'm2',
//           name: 'Schnitzel',
//           description: 'A german specialty!',
//           price: 16.5,
//         },
//         {
//           id: 'm3',
//           name: 'Barbecue Burger',
//           description: 'American, raw, meaty',
//           price: 12.99,
//         },
//         {
//           id: 'm4',
//           name: 'Green Bowl',
//           description: 'Healthy...and green...',
//           price: 18.99,
//         },
//       ];

//       const mealist=DUMMY_MEALS.map(dish=>(
        
//         <li className={classes.meal}>
//         <div >
//         <h3 >{dish.name}</h3>
//        <div>{dish.id}</div>
//         <div className={classes.description}>{dish.description}</div>
//         <div className={classes.price}>RS:{dish.price}</div>
//         </div>

//        <MealButton  onAddToCart={addToCartHandler}/>
//         </li>
//         ))
//     return (
//       <div>
//           <Card>
//               <ul>{mealist}</ul>
        
//           </Card>
      
//       </div>
//     )
//   }
//   export default meal;    
       
          
import React, { useContext } from 'react';
import Card from '../UI/Card';
import classes from '../MEALS/MealItem.module.css'

import MealItem from './MealItem';

const Meal = (props) => {
  

  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const mealList = DUMMY_MEALS.map((dish) => (
    <MealItem key={dish.id} name={dish.name} description={dish.description} price={dish.price} id={props.id}/>
  ));

  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default Meal;

       
        
      
       
       
