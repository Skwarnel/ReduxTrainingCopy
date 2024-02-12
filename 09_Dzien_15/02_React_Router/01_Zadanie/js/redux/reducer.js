// Reducer zwracający tablicę produktów
import {ADD_PRODUCT} from "./actions";

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer;