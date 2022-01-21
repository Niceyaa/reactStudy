import React, { Component } from "react";
/* let styleObj = {
    width: '500px',
    height: '300px',
    border: '1px solid red'
} */
export default class App extends Component {

    render() {
        return (
            <div>
                <h5>首页</h5>
                <hr />
                <a href="/list">列表页</a>
                <a href="/detail">详情页</a>
                <div className="box" style={{ "width": "500px", height: "300px", border: "1px solid" }}></div>
            </div>
        )
    }

}