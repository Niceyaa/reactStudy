import  ReactDOM  from "react-dom";
import App from './App8.jsx'
// 引入提供器 Provider 包含在Provider里面的组件，都可以拿到store 仓库的数据
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

/* setTimeout(() => {
    ReactDOM.render(
        <h2>dsklj</h2>,
        document.getElementById('root'))
}, 3000); */
