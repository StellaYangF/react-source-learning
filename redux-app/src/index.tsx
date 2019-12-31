import { createStore, Action, Reducer, Store } from 'redux';

let counterValue: HTMLElement | null = document.getElementById('counter-value');
let incrementBtn: HTMLElement | null = document.getElementById('increment-btn');
let decrementBtn: HTMLElement | null = document.getElementById('decrement-btn');

const INCREMENT: string = 'INCREMENT';
const DECREMENT: string = 'DECREMENT';

interface State {
  number: number
}

let initState: State = { number: 0 };

type CounterAction = Action<string>;
const reducer:Reducer<State, CounterAction> = (state: State = initState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT: 
      return { number: state.number - 1 };
    default:
      return state;
  }
}

let store: Store<State, CounterAction> = createStore(reducer);
function render():void {
  counterValue!.innerHTML = store.getState().number + '';
}
store.subscribe(render);
render();
incrementBtn!.addEventListener('click', () => store.dispatch({ type: INCREMENT }));
decrementBtn!.addEventListener('click', () => store.dispatch({ type: DECREMENT }));