import React from 'react';
import Aux from '../../hoc/_Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad:0.5,
  cheese : 0.4,
  meat : 1.4,
  bacon: 0.5

}


class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice : 4
  }

  addIngredientHandler = (type) => {

    const oldCountOfIngredient = this.state.ingredients[type]
    const updatedCountOfIngredient = oldCountOfIngredient + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCountOfIngredient;
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice : newPrice, ingredients: updatedIngredients})   
  }

  removeIngredientHandler = (type) => {
    const oldCountOfIngredient = this.state.ingredients[type];
    if(oldCountOfIngredient <= 0 ) {
      return
    }
    const updatedCountOfIngredient = oldCountOfIngredient - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = updatedCountOfIngredient;

    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceAddition;

    this.setState({
      ingredients : updatedIngredients,
      totalPrice : newPrice
    })
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    }
    for(let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
         price={this.state.totalPrice}
         ingredientAdded={this.addIngredientHandler}
         ingredientRemoved={this.removeIngredientHandler}
         disabled={disableInfo} />
      </Aux>
    )

  }
}

export default BurgerBuilder;