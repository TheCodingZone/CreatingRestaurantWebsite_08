import React from 'react'
import classes from '../UI/Card.css'
export default function Card(props) {
  return (
    <div className={classes.Card}>
      {props.children}
    </div>
  )
}
