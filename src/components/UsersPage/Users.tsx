import { useState } from "react"
import { UserType } from "../redux/usersReducer"
import './style.scss'
//@ts-ignore
import User from "./User.tsx"


interface PropsType {
    users: UserType[] | undefined
    sortUsers: (type: string, sortKey: string) => void
}

const Users: React.FC<PropsType> = (props) => {

    const mapUsers = props.users?.map(user => {
        return <User key={user.id}
            id={user.id}
            name={user.name}
            city={user.address?.city}
            company={user.company?.name}>
        </User>
    })



    return (
        <>  
            <div className="users__list users-list">
                {mapUsers}
            </div>
            <p className="users__total">{`Найдено ${props.users?.length} пользователей`}</p>

        </>

    )
}

export default Users

