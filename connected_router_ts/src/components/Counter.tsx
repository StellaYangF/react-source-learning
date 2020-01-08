import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter';
import { CounterState } from '../store/reducers/counter';
import { RootState } from '../store/reducers';
type Props = CounterState & typeof actions;

function Counter(props: Props) {
  return (
    <>
      <p>{ props.number }</p>
      <button onClick={ props.increment }>+</button>
      <button onClick={ () => props.go('/') }>Home</button>
    </>
  )
}
let mapStateToProps = (state: RootState): CounterState => state.counter;
export default connect(
  mapStateToProps,
  actions
)(Counter);