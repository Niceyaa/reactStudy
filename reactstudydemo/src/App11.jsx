import React, { Component } from 'react'


class Sub extends Component{
    render(){
        return (
            <div>{this.props.msg}</div>
        )
    }
}

export default class App extends Component {
    state = {
        msg: 'hello'
    }
    render() {
        return (
            <div>
                <div>生命周期钩子函数</div>
                <Sub msg={this.state.msg}/>
            </div>
        )
    }
    
    componentWillUnmount(){
        console.log('卸载阶段-componentWillUnmount')
    }
}