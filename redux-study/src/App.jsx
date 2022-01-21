import React, { Component } from "react";
import './App.css'
import { Button, Input, List } from 'antd'
import store from './store'
import {addItemCreator,changeValCreator} from './store/actionCreator'

console.log('store',store)

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this))
    }
    storeChange(){
        this.setState(store.getState())
    }
    render() {
        return (
            <div className="todoList">
                <div className="top">
                    <Input placeholder='请输入内容' value={this.state.iptVal} onChange={this.changeVal.bind(this)}></Input>
                    <Button type="primary" onClick={this.addItem.bind(this)}>添加</Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.listArr}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    changeVal(e) {
        store.dispatch(changeValCreator(e))
    }
    addItem(){
        store.dispatch(addItemCreator())
    }
}