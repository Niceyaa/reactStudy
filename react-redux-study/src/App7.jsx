// 使用 createContext ，useReducer 实现类似 redux的功能
import { useReducer, createContext } from 'react'
import { NumReducer } from './reducer'

// 创建上下文空间
const NumContext = createContext()

function Sub() {
    // return <h3>{state.num}</h3>
    return (
        <NumContext.Consumer>
            {
                ({ state }) => <h3>{state.num}</h3>
            }
        </NumContext.Consumer>
    )
}
function Btn() {
    // return <button onClick={() => dispatch({ type: 'addNum', value: 2 })}>累加</button>
    return (
        <NumContext.Consumer>
            {
                ({ dispatch }) => <button onClick={() => dispatch({ type: 'addNum', value: 2 })}>累加</button>
            }
        </NumContext.Consumer>
    )
}

export default () => {

    const [state, dispatch] = useReducer(NumReducer, { num: 1 })
    return (
        <div>
            <div>useContext的使用</div>
            <NumContext.Provider value={{ state, dispatch }}>
                <Sub />
                <Btn />
            </NumContext.Provider>

        </div>
    )
}