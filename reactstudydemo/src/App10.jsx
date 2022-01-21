import React, { Component } from 'react'


// 父子组件,更新时，会优先调取父组件的will和render，然后去调取子组件的更新阶段函数，最后调取父组件的componentDidUpdate
class Sub extends Component{
    render(){
        return (
            <div>{this.props.msg}</div>
        )
    }
    UNSAFE_componentWillReceiveProps(nextProps,nextState) {
        console.log("子组件--更新阶段-0-UNSAFE_componentWillReceiveProps-组件是否可以更新")
    }
     // return false 表示不更新视图《不调用render方法》
     shouldComponentUpdate(nextProps,nextState) {
        console.log("子组件--更新阶段-1-shouldComponentUpdate-组件是否可以更新")
        return this.props.msg!==nextProps.msg
    }
    UNSAFE_componentWillUpdate(){
        console.log('子组件--更新阶段-2-UNSAFE_componentWillUpdate-组件准备更新')
    }
    
    componentDidUpdate(){
        console.log('子组件--更新阶段-4-componentDidUpdate-组件更新完成')
    }
}

export default class App extends Component {
    state = {
        msg: 'hello'
    }
    render() {
        console.log("挂载阶段-3-render-开始渲染")
        return (
            <div>
                <div>生命周期钩子函数</div>
                <Sub msg={this.state.msg}/>
                <button onClick={this.changeMsg.bind(this)}>改变msg</button>
            </div>
        )
    }
    
    // return false 表示不更新视图《不调用render方法》
    // shouldComponentUpdate(nextProps,nextState) {
    //     console.log("父组件--更新阶段-1-shouldComponentUpdate-组件是否可以更新")
    //     return this.state.msg!==nextState.msg
    // }

    
    changeMsg(){
        this.setState({
            msg:'hello world'
        })
    }
    UNSAFE_componentWillUpdate(){
        console.log('父组件--更新阶段-2-UNSAFE_componentWillUpdate-组件准备更新')
    }
    
    componentDidUpdate(){
        console.log('父组件--更新阶段-4-componentDidUpdate-组件更新完成')
    }
}

