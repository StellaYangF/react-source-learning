import React, { useState, useRef, createRef, forwardRef } from 'react';

let input;
function Child(props) {
  // const inputRef = createRef();
  const inputRef = useRef();
  console.log('input === inputRef', input === inputRef);
  input = inputRef;
  function getFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={ inputRef }/>
      <button onClick={ getFocus }>get focus</button>
    </>
  )
}

function Parent() {
  let [ number, setNumber ] = useState(0);
  return (
    <>
      <Child/>
      <p>{ number }</p>
      <button onClick={ () => setNumber(number => number + 1) }>+</button>
    </>
  )
}


function Child1(props) {
  // const inputRef = createRef();
  let ref = props.inputRef;
  console.log('input === inputRef', input === ref);
  input = ref;
  function getFocus() {
    ref.current.focus();
  }
  return (
    <>
      <input ref={ ref }/>
      <button onClick={ getFocus }>get focus</button>
    </>
  )
}

function Parent1() {
  const inputRef = useRef();

  let [ number, setNumber ] = useState(0);
  return (
    <>
      <Child1 ref2={ inputRef }/>
      <p>{ number }</p>
      <button onClick={ () => setNumber(number => number + 1) }>+</button>
    </>
  )
}

function Child2(props, ref) {
  return (
    <>
      <input ref={ ref }/>
    </>
  )
}
let Child2WithRef = forwardRef(Child2);

function Parent2() {
  const inputRef = useRef();

  function getFocus() {
    inputRef.current.value = 'focus';
    inputRef.current.focus();
  }

  let [ number, setNumber ] = useState(0);
  return (
    <>
      <Child2WithRef ref={ inputRef }/>
      <p>{ number }</p>
      <button onClick={ getFocus }>get focus</button>
      <button onClick={ () => setNumber(number => number + 1) }>+</button>
    </>
  )
}

function useImperativeHandle(ref, callback) {
  ref.current = callback();
}

function Child3(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => (
    // 给父组件 传递过来的 ref 添加下面的对象
    {
      focus() {
        inputRef.current.focus();
      },
      changeValue(newValue) {
        inputRef.current.value = newValue;
      }
    }
  ))
  return (
    <>
      <input ref={ inputRef }/>
    </>
  )
}
let Child3WithRef = forwardRef(Child3);

function Parent3() {
  const inputRef = useRef();

  function getFocus() {
    inputRef.current.value = 'focus';
    inputRef.current.focus();
  }

  function changeValue(newValue) {
    inputRef.current.changeValue(newValue);
  }

  let [ number, setNumber ] = useState(0);
  return (
    <>
      <Child3WithRef ref={ inputRef }/>
      <p>{ number }</p>
      <button onClick={ getFocus }>get focus</button>
      <button onClick={ () => changeValue("Hello") }>change value</button>
      <button onClick={ () => setNumber(number => number + 1) }>+</button>
    </>
  )
}
export default Parent3;