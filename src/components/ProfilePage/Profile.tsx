
import { useForm } from "react-hook-form";
import { UserType } from "../redux/usersReducer";

interface PropsType {
    user: UserType | undefined
    comment: string
}


const Profile: React.FC<PropsType> = (props) => {

    const { user, comment } = props


    return (

        <form className="profile-container__form form">
            <div className="form__container">
                <div className="form__control">
                    <label >Name</label>
                    <input disabled defaultValue={user?.name} className="form_disabled"/>
                </div>
                <div className="form__control">
                    <label >User name</label>
                    <input disabled className="form_disabled" defaultValue={user?.username} />
                </div>
                <div className="form__control">
                    <label >E-mail</label>
                    <input disabled className="form_disabled" defaultValue={user?.email} />
                </div>
                <div className="form__control">
                    <label >Street</label>
                    <input disabled className="form_disabled" defaultValue={user?.address?.street}/>
                </div>
                <div className="form__control">
                    <label >City</label>
                    <input disabled className="form_disabled" defaultValue={user?.address?.city} />
                </div>
                <div className="form__control">
                    <label >Phone</label>
                    <input disabled className="form_disabled" defaultValue={user?.phone}/>
                </div>
                <div className="form__control">
                    <label>Website</label>
                    <input disabled className="form_disabled" defaultValue={user?.website} />
                </div>
                <div className="form__control">
                    <label>Comment</label>
                    <textarea disabled className="form_disabled" defaultValue={comment}/>
                </div>
            </div>
            <button type="button" className="form__button button button_disabled">Отправить</button>
        </form>
    )
}

export default Profile