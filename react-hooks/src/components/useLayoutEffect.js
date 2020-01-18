import React, { useState, useLayoutEffect, useEffect } from 'react';

function LayoutEffect() {
  const [color, setColor] = useState('red');
  // DOM Render Tree 阶段执行 在 painting 和 display 之前
  useLayoutEffect(() => {
      alert(color);
  });
  useEffect(() => {
      console.log('color', color);
  });
  return (
      <>
          <div id="myDiv" style={{ background: color }}>颜色</div>
          <button onClick={() => setColor('red')}>红</button>
          <button onClick={() => setColor('yellow')}>黄</button>
          <button onClick={() => setColor('blue')}>蓝</button>
      </>
  );
}

export default LayoutEffect;