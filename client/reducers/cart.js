import {ADD_TO_CART} from '../actions'

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getNewCart(state, action.id)
    default:
      return state
  }
}

function getNewCart (state, id) {
  let exists = false
  const newState = state.map(item => {
    if (item.id === id) {
      item.quantity += 1
      exists = true
    }
    return item
  })

  if (exists) {
    return newState
  } else {
    newState.push({id: id, quantity: 1})
    return newState
  }
}

export default cart
