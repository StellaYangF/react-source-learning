import React, { useState, useEffect } from 'react';
import './index.css';

function useMove(initialClassName) {
  const [className, setClassName] = useState(initialClassName);
  const [state, setState] = useState('');
  function bigger() {
      setState('bigger');
  }
  function smaller() {
    setState('smaller');
}
  useEffect(() => {
    setClassName(`${initialClassName} ${initialClassName}-${state}`);
  }, [state]);
  return [className, bigger, smaller];
}

export default function App() {
  const [className, bigger, smaller] = useMove('circle');
  return (
      <div>
          <button onClick={bigger}>bigger</button>
          <button onClick={smaller}>smaller</button>
          <div className={className}></div>
      </div>
  )
}