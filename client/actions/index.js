export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const NAVIGATE = 'NAVIGATE'

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    id
  }
}

export const updateCart = (cart) => {
  return {
    type: UPDATE_CART,
    cart
  }
}

export const navigate = (destination) => {
  return {
    type: 'NAVIGATE',
    destination
  }
}
