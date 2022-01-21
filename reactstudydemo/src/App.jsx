import React from "react";

let msg = '你好啊'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.changeMsg = this.changeMsg.bind(this)
    }
    render(){
        return (
            <> 
            <h2>msg: {msg}</h2>
            <button onClick={this.changeMsg.bind(this)}>1.修改msg</button>
            <button onClick={this.changeMsg}>2.修改msg</button>
            <button onClick={()=>this.changeMsg()}>3.修改msg</button>
            </>
           
            )
    }
    changeMsg(){
        msg = 'hello'
        console.log("修改成功了")
    }
}