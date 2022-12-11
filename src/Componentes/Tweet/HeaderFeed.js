//style
import "../../styles.css";

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TweetsContext } from '../../context/TweetsContext';

import logoDevUnited from "../../image/devUnitedlogo.svg";
import logoflag from "../../image/flaglogo.svg";

const HeaderFeed = ({ color, photo}) => {
    const { setLoadingTweets } =  useContext(TweetsContext);

    const handleLoading = () => {
        setLoadingTweets(true);
    }

    return (
        <div className="header align-center">
            <div className="mg-auto flex-between-center">
                <Link to="/profile-user/posts" onClick={handleLoading}>
                    <img 
                        className={`header-photo border-${color}`} 
                        src={photo} 
                        alt="header" />
                </Link>
                <div className="logo-flag-distance">
                    <img 
                        className="logo-flag-min" 
                        src={logoflag} alt="logo-flag" />
                </div>
                <div className="logo-header-container flex-between-center">
                    <img 
                        className="logo-DevUnited" 
                        src={logoDevUnited} 
                        alt="logo-devUnited" />
                </div>  
            </div>
        </div>
    )
}

export default HeaderFeed;