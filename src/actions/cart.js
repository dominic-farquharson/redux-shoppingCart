/*
  Action - payload of information that send data from app to the store.
  - Only source of info for the store.
  - Send actions ot the store using store.dispatch()
  - plain javascript objects
  - must have a type property (string constants)
*/


// action to add item to cart
export const addToCart = item => {
  console.log('adding item: ', item)
  return {
    type: 'add', // type of action
    item  // payload

  }
}