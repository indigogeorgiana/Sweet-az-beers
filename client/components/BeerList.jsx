import React from 'react'
import {connect} from 'react-redux'

import {addToCart, navigate} from '../actions'

import BeerListItem from './BeerListItem'

const BeerList = (props) => {
  return (
    <div className='beerlist'>
      <p className='welcome'>Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
      {props.beers.map(beer => {
        return (
          <BeerListItem key={beer.id} beer={beer} addToCart={props.addToCart} />
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
      dispatch(navigate('cart'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
