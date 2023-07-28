import React from 'react'
import classes from'../MEALS/MealItem.module.css'
import Input from '../UI/Input'
import { useRef , useState } from 'react'



const MealButton=(props) =>{

 

  const amountInputRef=useRef();
  const[amountIsValid,setAmountIsValid]=useState(true);


  const submitHandler=event=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber= +enteredAmount;

    

    if(enteredAmount.trim().length=== 0 || enteredAmountNumber< 1 || enteredAmountNumber> 5 ){
      setAmountIsValid(false);
      return;
    }
    

    props.onAddToCart(enteredAmountNumber);
  }
  

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      
      <Input
      ref={amountInputRef }
      label='Amount'
      input={{
       
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'

      }}
      
      
      
      />
       <button className={classes.button}>+ ADD ITEM</button>
       {!amountIsValid && <p>PLEASE ENTER THE AMOUNT BETWEEN 1 TO 5</p>}
       
    </form>
  )
}
export default MealButton;
        
       

       
    
