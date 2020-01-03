import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';

let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

let initState = { number: 0 };

const reducer = (state = initState, action) => {
  switch(action.type) {
    case INCREMENT:
      return { number: state.number + 2 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
let store = createStore(reducer, val => val );

function render() {
  counterValue.innerHTML = store.getState().number;
}

store.subscribe(render);

incrementBtn.addEventListener('click', () => console.log(store.dispatch({ type: INCREMENT })));
decrementBtn.addEventListener('click', () => store.dispatch({ type: DECREMENT }));