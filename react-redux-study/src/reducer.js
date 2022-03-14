export const NumReducer = (state = { num: 0 }, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'addNum':
            newState.num += action.value
            break;
        default: break
    }
    return newState
}