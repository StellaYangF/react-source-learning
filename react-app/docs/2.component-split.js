import React from 'react';
import ReactDOM from 'react-dom';

class PanelHeader extends React.Component{
  render() {
    return <div className='panel-header'>Panel header </div>
  }
}
class PanelBody extends React.Component{
  render() {
    return <div className='panel-body'>Panel body </div>
  }
}

class PanelFooter extends React.Component{
  render() {
    return <div className='panel-footer'>Panel footer </div>
  }
}
class Panel extends React.Component{
  render () {
    return (
      <div className='panel'>
        <PanelHeader/>
        <PanelBody/>
        <PanelFooter/>
      </div>
    )
  }
}


ReactDOM.render(<Panel/>, document.getElementById('root'));