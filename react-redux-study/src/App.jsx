import React,{Component} from 'react'
// 引入连接器
import {connect} from 'react-redux'

class App extends Component{
    
    render(){
        return (
            <div>
                <h3>{this.props.num}</h3>
                <button onClick={()=>this.props.countAdd()}>累加</button>
            </div>
        )
    }
   
    
}

// 状态映射 将state映射为props
const mapStateToProps = (state)=>{
    return {
        num:state.num
    }
}

// 事件派发映射
const mapDispatchToProps = (dispatch)=>{
    return {
        countAdd(){
            dispatch({
                type:'addNum',
                value:2
            })
        }
    }
}

// export default connect(状态映射,时间派发映射)(组件名称)
export default connect(mapStateToProps,mapDispatchToProps)(App)