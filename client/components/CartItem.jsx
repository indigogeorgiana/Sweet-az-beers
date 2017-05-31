import React from 'react'

import beerData from '../../data/beers'

const CartItem = (props) => {
  const name = getNameFromId(props.item.id)
  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          className='update-input'
          value={props.item.quantity}
          onChange={(e) => props.update(props.item.id, e.target.value)} />
      </td>
      <td><button onClick={() => props.deleteFromCart(props.item.id)}>
        <span className='fa fa-trash fa-2x' />
      </button></td>
    </tr>
  )
}

function getNameFromId (id) {
  const beer = beerData.beers.find(beer => beer.id === id)
  return beer.name
}

export default CartItem
