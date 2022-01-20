import React,{Component} from "react";
import PropTypes from 'prop-types'

class Child extends Component{
    // 定义接收属性的类型，是否必传
    static propTypes = {
        // num:PropTypes.number.isRequired
        num:PropTypes.number,
        name:PropTypes.string
    }
    // 定义属性的默认值
    static defaultProps = {
        name:'zs'
    }
    render(){
        return (
            <div>
                <h5>Child子组件--{this.props.num}---name---{this.props.name}</h5>
            </div>
        )
    }
}

class App extends Component{

    state = {
        myNum:111
    }
    render() {
        console.log("render")
        return (
            <div>
               <Child num={this.state.myNum}></Child>
            </div>

        )
    }
   
    
}
export default App