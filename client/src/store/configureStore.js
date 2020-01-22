import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from './reducers/auth'
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer
})

const configureStore = () => createStore(rootReducer, {}, applyMiddleware(reduxThunk))

export default configureStore