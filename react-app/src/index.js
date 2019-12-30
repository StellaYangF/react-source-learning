import React from 'react';
import ReactDOM from 'react-dom';
class ScrollingList extends React.Component {
    timeID;
    constructor(props) {
        super(props);
        this.state = { messages: [] }
        this.wrapper = React.createRef();
    }

    addMessage() {
        this.setState(state => ({
            messages: [`${state.messages.length}`, ...state.messages],
        }))
    }
    componentDidMount() {
        this.timeID = window.setInterval(() => {
            this.addMessage();
        }, 3000)
    }
    componentWillUnmount() {
        window.clearInterval(this.timeID);
    }
    getSnapshotBeforeUpdate() {
        return this.wrapper.current.scrollHeight;
    }
    componentDidUpdate(pervProps, pervState, prevScrollHeight) {
        const curScrollTop = this.wrapper.current.scrollTop;
        this.wrapper.current.scrollTop = curScrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight);
    }
    render() {
        let style = {
            height: '100px',
            width: '500px',
            border: '1px solid red',
            overflow: 'auto',
            margin: '30px auto',
        }
        return (
            <div style={style} ref={this.wrapper} >
                {this.state.messages.map((message, index) => (
                    <div key={index} className='item'>{message} </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <ScrollingList />,
    document.getElementById('root')
);