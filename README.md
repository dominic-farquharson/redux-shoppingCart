Source: react.express/redux

Redux Architecture

- store
An application will create a single Redux store to hold all data and state. We can view the state of the store by calling store.getState(). The store's state should never be modified directly; instead, we call store.dispatch(action) to dispatch actions into the store.

- action
actions should be plain objects containing a type field, e.g. {type: 'INCREMENT'}. You can define any types you want. You may also include other fields in the action object. By convention, we often pass extra data in a payload field, e.g. {type: 'SET_VALUE', payload: 42}. Read more about action conventions here: Flux Standard Actions.

- reducer
You then define a function to handle actions, and update the store accordingly. You can choose how to update the state depending on which type of action your reducer function receives. Redux will pass this function the current state of the store, and the action you dispatched, expecting an updated state object to be returned: (state, action) => newState. We call this function a reducer function.