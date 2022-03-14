/* 
    函数式组件：
        1.无 this    2.无 状态(state)    3.无 生命周期钩子函数
        通常需要结合hook来实现 --- useState
        所有的hook都不能写在条件语句当中
    useState: 
        [变量名,修改变量的方法] = useState(变量初始值)
        let [num, setNum] = useState(0)
*/
import { useState } from 'react'

export default () => {
    // let num = 0   通过定义普通变量的方式，无法触发视图的更新
    let [num, setNum] = useState(0)
    return (
        <div>
            <div>函数式组件</div>
            <h3>{num}</h3>
            <button onClick={() => setNum(num + 2)}>累加</button>
        </div>
    )
}