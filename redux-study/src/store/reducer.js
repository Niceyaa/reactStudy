import {
    ADD_ITEM,
    CHANGE_VAL,
    COUNT_ADD
} from './actionTypes'
const defaultState = {
    iptVal: '',
    listArr: ['java', 'js', 'php'],
    num: 1
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_VAL:
            newState.iptVal = action.value
            console.log("newState.iptVal", newState.iptVal)
            break;
        case ADD_ITEM:
            newState.iptVal.trim().length !== 0 && newState.listArr.unshift(newState.iptVal) && (newState.iptVal = '')
            break;
        case COUNT_ADD:
            newState.num +=  action.value
            break;
        default:
            break;
    }
    return newState
}