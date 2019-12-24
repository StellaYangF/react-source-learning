import React from 'react';
import ReactDOM from 'react-dom';

// components分类
// 函数式组件
function Button (props) {
  return <button style={{ borderColor: '#ff4d4f', backgroundColor: '#ff4d4f', padding: '1em', borderRadius: '1em', color: '#fff', outline: '0', margin: '0 20px 28px 0' }}>props.content</button>
}
// 类组件
class Tag extends React.Component {
  render() {
  return <span style={{ backgroundColor: this.props.color, color: '#fff', padding: '.4em', borderRadius: '0 12px 12px 0' }}>{  this.props.content }</span>
  }
}
let elem = (
  <>
    <Button content='Login'/>
    <Tag color='#f9b' content='coupon' />
  </>
)

ReactDOM.render(elem, document.getElementById('root'));