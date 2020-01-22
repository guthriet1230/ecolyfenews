import { FETCH_USER } from "../actions/actionTypes";

const initialState = {

};


const reducer = function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state
    }
}

export default reducer