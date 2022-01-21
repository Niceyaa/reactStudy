import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App13 from '../App13.jsx'
import Detail from '../Detail.jsx'
import List from '../List.jsx'


const BaseRouter = ()=>{
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<App13 />}></Route>
                    <Route path={'/list'} element={<List />}></Route>
                    <Route path={'/detail'} element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        )
}

export default BaseRouter