import { INCREMENT, DECREMENT } from '../constants/ActionTypes'

const initialState = {
    value: 0
}


export default (state = initialState, action) => {
    switch(action.type) {
    case INCREMENT:
        return {
            value: state.value + 1,
        }
    case DECREMENT:
        return {
            value: state.value - 1,
        }
    default:
        return {
            value: state.value,
        }
    }
}