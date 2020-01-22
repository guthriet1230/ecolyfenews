import { FETCH_USER } from "../actions/actionTypes";

const initialState = {
    habits: []
};


const reducer = function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        //case FETCH_USER:
        //     return {
        //         ...state,
        //         habits: habits
        //     };
        default:
            return state
    }
}

export default reducer