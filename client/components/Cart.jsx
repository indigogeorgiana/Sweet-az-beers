import React from 'react'
import {connect} from 'react-redux'

import CartItem from './CartItem'

import {
  navigate,
  deleteFromCart,
  updateCart} from '../actions'

/*
 * This is a stateful component to manage the state of the quantities
 * before the update button is selected. The Redux state isn't
 * updated until the Update button is selected but this component's
 * state is updated each time a quantity changes.
 */
class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: props.cart
    }
  }

  update (id, quantity) {
    this.setState({
      cart: this.state.cart.map(item => {
        if (item.id === id) item.quantity = Number(quantity)
        return item
      })
    })
  }

  deleteItem (id) {
    const cart = this.state.cart.filter(item => item.id !== id)
    this.setState({cart})
    this.props.deleteFromCart(id)
  }

  render () {
    return (
      <div className='cart'>
        <table>
          <thead>
            <tr>
              <th>Beer</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, id) => {
              return (
                <CartItem key={id}
                  item={item}
                  update={this.update.bind(this)}
                  deleteFromCart={this.deleteItem.bind(this)}
                />
              )
            })}
          </tbody>
        </table>

        <p className='actions'>
          <a href='#' onClick={this.props.keepShopping}>Continue shopping</a>
          <button onClick={() => this.props.updateCart(this.state.cart)}>Update</button>
          <button className='button-primary'>Checkout</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keepShopping: () => dispatch(navigate('listing')),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    updateCart: (cart) => dispatch(updateCart(cart))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
