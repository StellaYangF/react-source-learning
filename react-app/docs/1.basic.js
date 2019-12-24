import React from 'react';
import ReactDOM from 'react-dom';

const elem = <h1>
  hello
</h1>;
// elem = React.createElement('h1',null, 'hello');

const spans = [
  <span>one</span>,
  <span>two</span>,
  <span>three</span>,
]
const fn = (span, index) => <div key={index} className='li' style={{ color: 'blue', fontSize: '30px' }}>{span}</div>
// const divs = spans.map(fn);
// const divs = React.Children.map(spans, (span, index) => <div>{span}</div>);

// 实现mapChildren核心
const map = (chidlren, fn) => chidlren.map(fn);
const divs = map(spans, fn);
ReactDOM.render(divs, document.getElementById('root'));