import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import HeaderProfile from '../../Componentes/Tweet/HeaderProfile';
import UserInfo from '../../Componentes/Tweet/UserInfo';

const LayoutProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <HeaderProfile 
                username={user.username} 
                enableLogOut={true} />
            <UserInfo 
                color={user.color} 
                photo={user.photo} 
                username={user.username} 
                enableTab={true} />
            <Outlet /> 
        </div>
    )
}

export default LayoutProfile;