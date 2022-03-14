
import { useState, createContext } from 'react'

// 1.创建上下文空间
const NumContext = createContext()

function Sub() {
    // 3.使用上下文空间
    // const {num,name} = useContext(NumContext)
    // return <h3>数字：{num}---姓名：{name}</h3>
    return (
        <NumContext.Consumer>
            {
                ({ name, num }) => <h3>数字：{num}---姓名：{name}</h3>
            }
        </NumContext.Consumer>
    )
}

function Btn() {
    // const { num, setNum } = useContext(NumContext)
    // return <button onClick={() => setNum(num + 2)}>累加</button>
    return(
        <NumContext.Consumer>
            {
                ({num,setNum})=><button onClick={() => setNum(num + 2)}>累加</button>
            }
        </NumContext.Consumer>
    )
}

export default () => {

    let [num, setNum] = useState(0)
    let [name, setName] = useState('叫我靓仔')

    return (
        <div>
            <div>useContext的使用</div>
            {/* 2. 使用上下文空间的提供器，将数据传递给子组件，如果需要传递多个值得时候，使用对象传递 */}
            <NumContext.Provider value={{ num, name, setNum }}>
                <Sub />
                <Btn />
            </NumContext.Provider>
        </div>
    )
}