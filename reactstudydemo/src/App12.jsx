import React, { Component } from 'react'



export default class App extends Component {
    state = {
        msg: ''
    }
    render() {
        return (
            <div>
                <div>受控组件和不受控组件</div>
                <input type="text" ref='notControl' />
                <button onClick={this.getNotControlValue.bind(this)}>获取不受控input的值</button>

                <input type="text" value={this.state.msg} onChange={this.changeControlValue.bind(this)} />
                <button onClick={this.getControlValue.bind(this)}>获取受控input的值</button>
            </div>
        )
    }
    getNotControlValue() {
        console.log(this.refs.notControl.value)
    }
    changeControlValue(e) {
        this.setState({ msg: e.currentTarget.value })
    }
    getControlValue(){
        console.log(this.state.msg)
    }

    /* 
        受控组件：
            表示值受state控制，获取的时候，不用通过操作dom，推荐
        不受控组件：
            表示值不受state控制，获取值的时候，需要通过ref this.refs.ref.value 来进行获取值的方式，这种方式就是通过dom去获取，不推荐使用
        
        受控组件和不受控组件一般针对表单元素而言
    */

}