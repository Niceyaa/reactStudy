/* 
    useEffect(callback,array)
        当 componentDidMounted 时，会默认走一次useEffect的cb
        当 不写 array（第二个参数时），表示监听页面更新 同时代表了 componentDidMounted 和 componentDidUpdate
        当 array 为 [] 空数组 时，表示不监听所有的页面更新
        当 array 为 [num] 时，就只会监听 num 改变时的页面更新，其余更新不会监听到
        当 cb return 一个函数 时，表示监听 组件卸载阶段
*/
import { useState,useEffect } from 'react'

export default () => {
   
    let [num, setNum] = useState(0)
    let [num1, setNum1] = useState(0)
    useEffect(()=>{
        return ()=>
        console.log('组件卸载')
    })
    return (
        <div>
            <div>函数式组件</div>
            <h3>数字1：{num}</h3>
            <button onClick={() => setNum(num + 2)}>累加</button>
            <h3>数字2：{num1}</h3>
            <button onClick={() => setNum1(num1 + 1)}>累加</button>
        </div>
    )
}