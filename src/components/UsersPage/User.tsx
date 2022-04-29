import { NavLink } from "react-router-dom"

interface PropsType {
    key: number
    id: number
    name: string
    city: string
    company: string
}
const User: React.FC<PropsType> = (props) => {
    return (
        <div className="users-list__user user">
            <p className="user__value"><span className="user__title">ФИО: </span>{props.name}</p>
            <p className="user__value"><span className="user__title">Город: </span>{props.city}</p>
            <p className="user__value"><span className="user__title">Компания: </span>{props.company}</p>
            <NavLink to={"/profile/" + props.id} className="user__more">Подробнее</NavLink>
        </div>
    )
}

export default User