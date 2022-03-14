
import { useReducer } from 'react'
import {NumReducer} from './reducer'
export default () => {

   const [state,dispatch] = useReducer(NumReducer,{num:1})
    return (
        <div>
            <div>useContext的使用</div>
            {/* 2. 使用上下文空间的提供器，将数据传递给子组件，如果需要传递多个值得时候，使用对象传递 */}
            <h3>{state.num}</h3>
            <button onClick={()=>dispatch({type:'addNum',value:2})}>累加</button>
        </div>
    )
}