import './style.scss'
import { appStateType } from '../redux/redux-store';
import { UserType } from './../redux/usersReducer';
import { connect } from 'react-redux';
import { formUserType, getProfileTC, SET_EDIT_MODE, SET_EDIT_USER } from '../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';

interface PropsType {
    user: UserType | undefined
    comment: string
    isFetching: boolean
    editMode: boolean
    getProfileTC: (id: string) => void
    SET_EDIT_MODE: (data: boolean) => void
    SET_EDIT_USER: (user: formUserType, comment: string) => void
}

const ProfileContainer: React.FC<PropsType> = (props) => {

    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            props.getProfileTC(userId)
        }
    }, [])

    const changeEditMode = () =>{
        props.editMode ? props.SET_EDIT_MODE(false) : props.SET_EDIT_MODE(true)
    }

    return (
        <>
            {props.isFetching ? <Preloader /> :
                    <div className="main__profile-container profile-container">
                        <div className="profile-container__header header">
                            <h5 className="header__title">Профиль пользователя</h5>
                            <button className={`header__button button ${props.editMode ? 'button_disabled' : ''}`} onClick={changeEditMode}>Редактировать</button>
                        </div>
                        <Profile user={props.user} comment={props.comment} setEditUser={props.SET_EDIT_USER} setEditMode={props.SET_EDIT_MODE} editMode={props.editMode}></Profile>
                    </div>
            }
        </>
    )
}

const mapStateToProps = (state: appStateType) => {
    return {
        user: state.profile.user,
        comment: state.profile.comment,
        isFetching: state.profile.isFetching,
        editMode: state.profile.editMode
    }
}

export default connect(mapStateToProps, { getProfileTC, SET_EDIT_MODE, SET_EDIT_USER })(ProfileContainer)