const defaultState = {
    num: 0
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'addNum':
            newState.num += action.value
            break;
        default:
            break;
    }
    return newState
}