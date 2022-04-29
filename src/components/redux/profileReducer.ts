import axios from "axios"
import { Dispatch } from "redux"
import { setFetchingACType, UserType } from "./usersReducer";


export interface initialProfileStoreType {
    user: UserType | undefined
    comment: string
    isFetching: boolean
    editMode: boolean

}

let initialStore: initialProfileStoreType = {
    user: undefined,
    comment: "",
    isFetching: false,
    editMode: false
}

type actionType = setUserACType | setFetchingACType | setEditModeACType | setEditUserACType;

const profileReducer = (state: initialProfileStoreType = initialStore, action: actionType): initialProfileStoreType => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.data,
                comment: ""
            }
        case "SET_EDIT_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.user.name,
                    username: action.user.username,
                    email: action.user.email,
                    phone: action.user.phone,
                    website: action.user.website,
                    address:{
                        ...state.user?.address,
                        city: action.user.city,
                        street: action.user.street
                    }

                },
                comment: action.comment
            }
        case "SET_FETCHING":
            return {
                ...state,
                isFetching: action.data
            }
        case "SET_EDIT_MODE":
            return {
                ...state,
                editMode: action.data
            }

        default:
            return state;
    }

}

export interface setUserACType {
    type: 'SET_USER'
    data: UserType
}

export const SET_USER = (data: UserType): setUserACType => {
    return {
        type: 'SET_USER',
        data
    }
}

export const SET_FETCHING = (data: boolean): setFetchingACType => {
    return {
        type: 'SET_FETCHING',
        data
    }
}

export interface setEditModeACType {
    type: 'SET_EDIT_MODE'
    data: boolean
}

export const SET_EDIT_MODE = (data: boolean): setEditModeACType => {
    return {
        type: 'SET_EDIT_MODE',
        data
    }
}
export interface setEditUserACType {
    type: 'SET_EDIT_USER'
    user: formUserType
    comment: string
}

export interface formUserType {
    name: string
    city: string
    email: string
    phone: string
    street: string
    username: string
    website: string
}

export const SET_EDIT_USER = (user: formUserType, comment: string): setEditUserACType => {
    return {
        type: 'SET_EDIT_USER',
        user,
        comment
    }
}



export const getProfileTC = (id: string) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(SET_FETCHING(true))
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                dispatch(SET_USER(response.data));
                dispatch(SET_FETCHING(false))
            })
    }
}


export default profileReducer;