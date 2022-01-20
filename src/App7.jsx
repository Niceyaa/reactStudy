import React,{Component} from "react";

class Child extends Component{
    render(){
        return (
            <div>
                <h5>Child子组件--{this.props.num}</h5>
                <button onClick={this.changeNum.bind(this)}>修改num</button>
            </div>
        )
    }
    changeNum(){
        this.props.changeNumFn(9999)
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
               <Child changeNumFn={this.changeNumFn.bind(this)} num={this.state.myNum}></Child>
            </div>

        )
    }
   changeNumFn(arg){
       this.setState({
           myNum:arg
       })
   }
    
}
export default App