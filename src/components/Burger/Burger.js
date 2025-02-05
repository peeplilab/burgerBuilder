import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      console.log(props.ingredients)
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}></BurgerIngredient>
      })
    })
    .reduce((prev, curr) => {
      return prev.concat(curr)
    }, [])
    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Hey man add ingredients</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients }
      <BurgerIngredient type="bread-bottom" />

    </div>
  );
}




export default burger;