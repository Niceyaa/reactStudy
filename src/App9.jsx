import React,{Component} from 'react'

export default class App extends Component{
    constructor(props){
        super(props)
        console.log("挂载阶段-1-constructor-构造器")
    }
    UNSAFE_componentWillMount(){
        console.log("挂载阶段-2-UNSAFE_componentWillMount-准备渲染")
    }
    
    render(){
        console.log("挂载阶段-3-render-开始渲染")
        return (
            <div>生命周期钩子函数</div>
        )
    }
    componentDidMount(){
        console.log("挂载阶段-4-componentDidMount-渲染完毕")
    }
    shouldComponentUpdate(){
        
    }
}