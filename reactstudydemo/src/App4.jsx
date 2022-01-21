import React from "react";


export default class App extends React.Component {

    state = {
        msg:'hello world'
    }
    render() {
        console.log("render")
        return (
            <>
                <input type="text" value={this.state.msg} onChange={this.inputMsgFn.bind(this)} />
                <div>{this.state.msg}</div>
            </>

        )
    }
    inputMsgFn(e){
        this.setState({
            msg:e.currentTarget.value
        })
    }
    
}