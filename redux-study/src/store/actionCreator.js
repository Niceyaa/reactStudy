// 定义一个专门用来产生 action 对象的文件，也是为了后期好维护，更好的模块化管理
import {
    ADD_ITEM,
    CHANGE_VAL,
    COUNT_ADD
} from './actionTypes'

export const addItemCreator = () => {
    return {
        type: ADD_ITEM,
    }
}

export const changeValCreator = (e) => {
    return {
        type: CHANGE_VAL,
        value: e.currentTarget.value
    }
}

// 累加
export const asyncCountAddCreator = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: COUNT_ADD,
                value: 2
            })
        }, 2000);

    }
    // return {
    //     type:COUNT_ADD,
    //     value:step
    // }
}