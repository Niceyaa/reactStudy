import React from "react";


export default class App extends React.Component {

    state = {
        arr: ['关羽', '张飞', '邢道荣']
    }
    render() {
        console.log("render")
        return (
            <>
                <ul>
                    {this.state.arr.map((item,index)=><li key={index}>{item}</li>)}
                </ul>
                <button onClick={this.changeArr.bind(this)}>修改最后一项值</button>
            </>

        )
    }
    changeArr(){
        let newArr = JSON.parse(JSON.stringify(this.state.arr))
        newArr.splice(newArr.length-1,1,'赵云')
        this.setState({
            arr:newArr
        })
    }
    
}