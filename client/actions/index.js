export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export const navigate = (destination) => {
  return {
    type: 'NAVIGATE',
    destination
  }
}
