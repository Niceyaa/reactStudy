import React from "react";


export default class App extends React.Component {

    state = {
        arr:[
            {name:'关羽',id:1},
            {name:'张飞',id:2},
            {name:'吕布',id:3},
        ]
    }
    render() {
        console.log("render")
        return (
            <>
               <ul>
                   {this.state.arr.map((item,idx)=>(
                    // 关于key的使用：如果数组确定是永恒不变的情况下，那么使用index和id都是可以的，
                    // 当时如果数组后面会改变，尤其排序会改变的情况下，使用index作为循环的key，就会导致key混乱（页面也会混乱），
                    // 这种情况下就只能使用id或者其他唯一标识的字段来作为key
                       <li key={idx}>
                           <span>{item.name}</span>
                           <input type="text" />
                       </li>
                   ))}
               </ul>
               <button onClick={this.changeArr.bind(this)}>修改数组</button>
            </>

        )
    }
    changeArr(){
        let arr = JSON.parse(JSON.stringify(this.state.arr))
        arr.unshift({name:'邢道荣',id:4})
        this.setState({
            arr
        })
    }
    
}