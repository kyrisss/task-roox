import { useEffect } from "react";
import { connect } from "react-redux"
import './style.scss'
//@ts-ignore
import { getUsersTC, UserType, } from './../redux/usersReducer.ts';
//@ts-ignore
import Users from "./Users.tsx";
//@ts-ignore
import { appStateType } from "../redux/redux-store";
import Preloader from "../Preloader/Preloader";


interface PropsType {
    users: UserType[] | undefined
    sort: string
    isFetching: boolean
    getUsersTC: () => void
}

const UsersContainer: React.FC<PropsType> = (props) => {


    useEffect(() => {
        props.getUsersTC()
    }, [])


    const sortUsers = (arr: UserType[] | undefined, filter: string) => {
        const sort = arr?.slice();

        switch (filter) {
            case "address":
                sort?.sort((a, b) => a[filter].city.localeCompare(b[filter].city))
                break
            case "company":
                sort?.sort((a, b) => a[filter].name.localeCompare(b[filter].name))
                break
            default:
                sort?.sort((a, b) => a.name.localeCompare(b.name))
                break
        }
        return sort
    }


    return (
        <>
            {props.isFetching ? <Preloader /> : 
            <section className="main__users users">
                <h1 className="users__title">Список пользователей</h1>
                <Users users={sortUsers(props.users, props.sort)} ></Users>
            </section>}

        </>

    )
}

const mapStateToProps = (state: appStateType) => {
    return {
        users: state.users.users,
        isFetching: state.users.isFetching,
        sort: state.users.sort
    }
}

export default connect(mapStateToProps, { getUsersTC })(UsersContainer)