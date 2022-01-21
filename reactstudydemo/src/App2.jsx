import React from "react";


export default class App extends React.Component{
    /* constructor(props){
        super(props)
        this.state = {
            msg: '你好啊'
        }
    } */
    state = {
msg:'nihaoa',
num:1
    }
    render(){
        console.log("render")
        return (
            <> 
            <h2>msg: {this.state.msg}</h2>
            <h2>num: {this.state.num}</h2>
            <button onClick={this.changeMsg.bind(this)}>1.修改msg</button>
            <button onClick={this.addNum.bind(this)}>2.累加</button>
            </>
           
            )
    }
    changeMsg(){
        // state 只能够通过setState去修改值
        this.setState({
            msg:'hello'
        })
    }
    addNum(){
        this.setState({
            num:this.state.num + 1
        })
    }
}