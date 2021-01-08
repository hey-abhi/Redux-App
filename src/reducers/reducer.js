const initialState = 0;

const reducerfunction = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_BY_ONE":
            return state + 1
        case "DECREMENT_BY_ONE":
            return state - 1
        case "RESET_COUNT":
            return 0
        default : 
            return state
    }
}
export default reducerfunction