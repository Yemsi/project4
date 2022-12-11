//style
import '../../styles.css';
import Tab from '../Tab';

const UserInfo = ({ color, photo, username, enableTab }) => {

    return (
        <div className='user-container'>
            <div className=" column">
                <img 
                className={` mg-auto img-user img-user-big align-center  border-${color}`} 
                src={photo} 
                alt="user-img" />
                <span className={`img-user-span inline-block mg-auto font-press-2p bg-${color}`}>
                    {username}
                </span>
            </div>
            {enableTab &&  <Tab />}
        </div>
    )
}

export default UserInfo;