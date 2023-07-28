import React,{Fragment} from 'react'
import classes from './Header.module.css'
import mealImages from '../../Assets/img.jpg'



import CartButton from '../CART/CartButton'

export default function Header(props) {

  
  return <Fragment>
    
      <header className={classes.header}>
      <h1>FOODCORNER</h1> 
      <CartButton onClick={props.onShowCart}/> 
      
   
      </header>
        {/* //L l    */}
      <div className={classes['main-image']}>
    
        <img src={mealImages} alt="LOADING..." />
      </div>
    </Fragment>
      };
     
     
     
        
   

  
