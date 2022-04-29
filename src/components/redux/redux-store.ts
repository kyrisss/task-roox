import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleWare from "redux-thunk"
//@ts-ignore
import usersReducer from './usersReducer.ts'
//@ts-ignore
import profileReducer from './profileReducer.ts'
import { initialUsersStoreType } from "./usersReducer"
import { initialProfileStoreType } from "./profileReducer"


export interface appStateType{
    users: initialUsersStoreType
    profile: initialProfileStoreType
}

let reducers = combineReducers({
    users: usersReducer,
    profile: profileReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));



export default store;