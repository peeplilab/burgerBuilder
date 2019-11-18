import React from 'react';
import Aux from '../../../hoc/_Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return <li key={key }>
        <span style={{ textTransform: 'capitalize' }}></span>{key} : {props.ingredients[key]}
      </li>
    })
  return (
    <Aux>
      <h3>Your order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.price}</strong></p>
      <p>Go and checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  );
}

export default orderSummary;