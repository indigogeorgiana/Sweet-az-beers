import {ADD_TO_CART} from '../actions'

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {id: action.id, quantity: 1} // TODO: increment if already added
      ]
    default:
      return state
  }
}

export default cart
