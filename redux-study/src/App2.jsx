import React, { Component } from 'react'
import store from './store'
import { asyncCountAddCreator } from './store/actionCreator'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this))
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() {
        return (
            <div>
                <h3>{this.state.num}</h3>
                <button onClick={this.countAdd.bind(this)}>累加</button>
            </div>
        )
    }
    // async countAdd() {
    countAdd() {
        // let step = 1
        // step = await new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(3)
        //     }, 2000);
        // })
        // store.dispatch(countAddCreator(step))
        asyncCountAddCreator()(store.dispatch)
    }
}