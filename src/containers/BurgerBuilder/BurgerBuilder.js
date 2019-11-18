import React from 'react';
import Aux from '../../hoc/_Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.4,
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
    totalPrice: 4,
    purchasable: false,
    purchasing : false
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
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    
    //pass the state as param - its updated state - cannot rely on old state value
    this.updatePurchaseState(updatedIngredients)
  }

  //check if ingredients is greater than zero
  updatePurchaseState = (ingredients) => {
      //turn obj into arr of values
    //sm is array of values - common pattern for key value mapping
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({ purchasable: sum > 0 })
  }

  removeIngredientHandler = (type) => {
    const oldCountOfIngredient = this.state.ingredients[type];
    if (oldCountOfIngredient <= 0) {
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
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing : false})
  }

  purchaseContinueHandler = () => {
    alert('you continue')
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
          price={this.state.totalPrice.toFixed(2)}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    )

  }
}

export default BurgerBuilder;