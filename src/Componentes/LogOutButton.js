//style
import "../styles.css";
import logout from '../image/logout.svg';
import useAuth from '../hook/useAuth';

const LogOutButton = () => {
    const {logOut} = useAuth();

    return (
        <button onClick={logOut}
            className=' button-logout flex-between-center font-press-2p'>
            <p className="font-press-2p">LOGOUT</p>
            <img src={logout} alt="out-button" />
            
        </button>
    )
}

export default LogOutButton;