import React, { Component } from 'react';

class Shelf extends Component {
  constructor() {
    super();
    
    this.state = {
      shelfItems: [
        'shampoo',
        'chocolate',
        'yogurt'
      ]
    }

    this.onAddItemToCart = this.onAddItemToCart.bind(this);
  }


  onAddItemToCart(item) {
    this.props.addItem(item);
  }

  render() {
    const shelfItems = this.state.shelfItems.map((item, i) => {
      return (
        <li 
          key={i}
        > 
          <button 
            onClick={() => this.onAddItemToCart(item)}>
              [+]
          </button> 
            {item}
        </li>
      )
    });

    return (
      <div>
        <h2>Store Shelf:</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    )
  }
}

export default Shelf;