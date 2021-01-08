const initialState = 0;

const reducerfunction = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_ONE":
            return state + 1
        case "DECREMENT_ONE":
            return state - 1
        case "RESET":
            return 0
        default : 
            return state
    }
}
export default reducerfunction