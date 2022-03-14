import { useRef } from 'react'
 
export default () => {

    const inputRef = useRef(null)

    function getVal(){
        console.log(inputRef.current.value)
    }
    return (
        <div>
            <div>useRef的使用</div>
            <input type="text" ref={inputRef}/>
            <button onClick={getVal}>获取input的值</button>
        </div>
    )
}