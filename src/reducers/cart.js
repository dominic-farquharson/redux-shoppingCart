/*
   reducer - takes state + action 
   
   reducer: specifies how state changes in reponse to an action
   action: (describes what happened)

*/
export default(state = [], action) => {
  // based on action returns new state
  switch(action.type) {
    case 'add':
      return [...state, action.item]
    default:
      // returns state if action is undefined
      return state;  
  }
}