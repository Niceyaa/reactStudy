import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        console.log("挂载阶段-1-constructor-构造器")
    }
    state = {
        msg: 'hello'
    }
    UNSAFE_componentWillMount() {
        console.log("挂载阶段-2-UNSAFE_componentWillMount-准备渲染")
    }

    render() {
        console.log("挂载阶段-3-render-开始渲染")
        return (
            <div>
                <div>生命周期钩子函数</div>
                <div>shouldComponentUpdate---{this.state.msg}</div>
                <button onClick={this.changeMsg.bind(this)}>改变msg</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("挂载阶段-4-componentDidMount-渲染完毕")
    }
    // return false 表示不更新视图《不调用render方法》
    shouldComponentUpdate(nextProps,nextState) {
        console.log("更新阶段-1-shouldComponentUpdate-组件是否可以更新")
        return this.state.msg!==nextState.msg
    }
    changeMsg(){
        this.setState({
            msg:'hello world'
        })
    }
    UNSAFE_componentWillUpdate(){
        console.log('更新阶段-2-UNSAFE_componentWillUpdate-组件准备更新')
    }
    
    componentDidUpdate(){
        console.log('更新阶段-4-componentDidUpdate-组件更新完成')
    }
}