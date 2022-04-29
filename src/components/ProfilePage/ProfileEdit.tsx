
import { useForm } from "react-hook-form";
import { formUserType } from "../redux/profileReducer";
import { UserType } from "../redux/usersReducer";

interface PropsType {
    user: UserType | undefined
    comment: string,
    setEditUser: (user: formUserType, comment: string) => void
    setEditMode: (data: boolean) => void
}


const ProfileEdit: React.FC<PropsType> = (props) => {

    const { user, comment } = props

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data: any) => {
        console.log(JSON.stringify({...data}));
        const user: formUserType = {
            name: data.name,
            city: data.city,
            email: data.email,
            phone: data.phone,
            street: data.street,
            username: data.username,
            website: data.website
        }
        const comm = data.comment
        props.setEditUser(user, comm)
        props.setEditMode(false)
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="profile-container__form form">
            <div className="form__container">
                <div className="form__control">
                    <label >Name</label>
                    <input className={errors.name ? "form__error" : ""} defaultValue={user?.name} {...register("name", { required: true })} />
                </div>
                <div className="form__control">
                    <label >User name</label>
                    <input className={errors.username ? "form__error" : ""} defaultValue={user?.username} {...register("username", { required: true })} />
                </div>
                <div className="form__control">
                    <label >E-mail</label>
                    <input className={errors.email ? "form__error" : ""} defaultValue={user?.email} {...register("email", { required: true })} />
                </div>
                <div className="form__control">
                    <label >Street</label>
                    <input className={errors.street ? "form__error" : ""} defaultValue={user?.address?.street} {...register("street", { required: true })} />
                </div>
                <div className="form__control">
                    <label >City</label>
                    <input className={errors.city ? "form__error" : ""} defaultValue={user?.address?.city} {...register("city", { required: true })} />
                </div>
                <div className="form__control">
                    <label >Phone</label>
                    <input className={errors.phone ? "form__error" : ""} defaultValue={user?.phone} {...register("phone", { required: true, maxLength: 15, minLength: 8 })} />
                </div>
                <div className="form__control">
                    <label>Website</label>
                    <input className={errors.website ? "form__error" : ""} defaultValue={user?.website} {...register("website", { required: true })} />
                </div>
                <div className="form__control">
                    <label>Comment</label>
                    <textarea defaultValue={comment} {...register("comment")} />
                </div>
            </div>
            <button type="submit" className="form__button button button_submit">Отправить</button>
        </form>
    )
}

export default ProfileEdit