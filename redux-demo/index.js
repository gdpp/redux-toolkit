const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// Action
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake(){
  return {
    type: CAKE_ORDERED,
    payload: 1
  }
}

function restockCake(qty = 1){
  return {
    type: CAKE_RESTOCKED,
    payload: qty 
  }
}

const initialState = {
  numOfCakes: 10,
  flavors: ['chocolate', 'vanilla', 'banana']
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
    default:
      return state
  }
}

const store =  createStore(reducer);

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => console.log('State: ', store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators({orderCake, restockCake}, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake();

unsubscribe();