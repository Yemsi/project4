//style
import "../../styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowBack } from '../../image/back.svg';//cambiar
//import LogOutButton from '../../Componentes/LogOutButton';
import logout from "../../image/logout.svg"
import useAuth from '../../hook/useAuth'

const HeaderProfile = ({ username, enableLogOut }) => {
    const {logOut} = useAuth();
    return (
        <div className="header align-center">
            <div className=' mg-auto flex-between-center'>
                <div className='pd-1 flex-between-center'>
                    <Link to="/feed">
                        <ArrowBack className="arrowback" />
                    </Link>
                    <span className='header-username font-press-2p inline-block'>{username}</span>
                </div>
                {/*Renderizado condicional para habilitar el Boton de LogOut */}
                {enableLogOut && 
                <button onClick={logOut}
                    className=' button-logout flex-between-center font-press-2p'>
                    <p className="font-press-2p">LOGOUT</p>
                    <img src={logout} alt="out-button" />    
                </button>}
            </div>
        </div>
    )
}

export default HeaderProfile;