import axios from "axios"
import { Dispatch } from "redux"


interface GeoType {
    lat: string | undefined,
    lng: string | undefined
}
interface CompanyType {
    name: string | undefined,
    catchPhrase: string | undefined,
    bs: string | undefined
}
interface AdressType {
    street: string | undefined,
    suite?: string | undefined,
    city: string | undefined,
    zipcode?: string | undefined,
    geo?: GeoType | undefined
}

export interface UserType {
    id?: number | undefined,
    name: string | undefined,
    username: string | undefined,
    email: string | undefined,
    address: AdressType | undefined,
    phone: string | undefined,
    website: string | undefined
    company?: CompanyType | undefined
}

export interface initialUsersStoreType {
    users: UserType[] | undefined
    sort: string
    isFetching: boolean
}

let initialStore: initialUsersStoreType = {
    users: undefined,
    sort: "",
    isFetching: false
}

type actionType = setUsersACType | setFetchingACType | setSortACType

const statusReducer = (state: initialUsersStoreType = initialStore, action: actionType): initialUsersStoreType => {

    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.data
            }
        case "SET_FETCHING":
            return {
                ...state,
                isFetching: action.data
            }
        case "SET_SORT":
            return {
                ...state,
                sort: action.data
            }
        default:
            return state;
    }

}

export interface setUsersACType {
    type: 'SET_USERS'
    data: UserType[]
}

export const SET_USERS = (data: UserType[]): setUsersACType => {
    return {
        type: 'SET_USERS',
        data
    }
}

export interface setFetchingACType {
    type: 'SET_FETCHING'
    data: boolean
}

export const SET_FETCHING = (data: boolean): setFetchingACType => {
    return {
        type: 'SET_FETCHING',
        data
    }
}

export interface setSortACType {
    type: 'SET_SORT'
    data: string
}

export const SET_SORT = (data: string): setSortACType => {
    return {
        type: 'SET_SORT',
        data
    }
}






export const getUsersTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(SET_FETCHING(true))
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                    dispatch(SET_USERS(response.data));
                    dispatch(SET_FETCHING(false))  
            })
        
    }
}

export default statusReducer;