// container component - communicates with store
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
// presentational component
import Shelf from './shelf';

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this props', this.props)
    const cartList = this.props.cart.map((item, i) => {
      return <li key={i}>{item}</li>;
    })

    return (
      <div className="Cart">
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Shopping Bag</h2>
        <ol>
          { cartList }
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);