import React from 'react';
import Aux from '../../../hoc/_Aux'

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
      <p>Go and checkout</p>
    </Aux>
  );
}

export default orderSummary;