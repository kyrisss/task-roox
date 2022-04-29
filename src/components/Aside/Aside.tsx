import { connect } from 'react-redux'
import { SET_SORT } from '../redux/usersReducer'
import './style.scss'

interface PropsType{
    SET_SORT: (data: string) => void
}


const Aside: React.FC<PropsType>= (props) => {

    const handleSort = (e:any) =>{
        props.SET_SORT(e.target.name)
    }


    return(
        <aside className="main__aside aside">
                <div className="aside__container">
                    <p className="aside__title">Сортировка</p>
                    <button className="aside__button button" name='address' onClick={ handleSort}>по городу</button>
                    <button className="aside__button button" name='company' onClick={ handleSort}>по компании</button>
                </div>
        </aside>
    )
}

const mapStateToProps = () =>{
    return{
        
    }
}


export default connect(mapStateToProps, {SET_SORT})(Aside)