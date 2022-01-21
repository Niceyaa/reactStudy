import React,{Component} from "react";
import PropTypes from 'prop-types'

class GrandSon extends Component{
    // 3、限制传入的数据类型
    static contextTypes = {
        num:PropTypes.number,
        changeNumFn:PropTypes.func
    }
    render(){
        return (
            <div>
                {/* 4、通过this.context.  使用 */}
                <h5>孙子组件--{this.context.num}</h5>
                <button onClick={this.changeNum.bind(this)}>修改num</button>
            </div>
        )
    }
    changeNum(){
        this.context.changeNumFn(9999)
    }
}
class Child extends Component{
    render(){
        return (
                <GrandSon />
        )
    }
    
}

class App extends Component{

    // 跨级组件传值
    // 1、定义上下文的数据类型
    static childContextTypes = {
        num:PropTypes.number,
        changeNumFn:PropTypes.func
    }
    // 2、给上下文中传入值
    getChildContext(){
        return {
            num:this.state.myNum,
            changeNumFn: this.changeNumFn.bind(this)
        }
    }


    state = {
        myNum:111
    }
    render() {
        console.log("render")
        return (
               <Child />
        )
    }
   changeNumFn(arg){
       this.setState({
           myNum:arg
       })
   }
    
}
export default App