//style
import "../../styles.css";
import EmptyHeart from '../../image/EmptyHeart.svg';
import FilledHeart from '../../image/FilledHeart.svg';
import { ReactComponent as DeleteButton } from '../../image/erase.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TweetsContext } from '../../context/TweetsContext';
import { Link } from 'react-router-dom';
import useTweets from '../../hook/useTweets';

const Tweet = ({ id, tweet, username, uid, date, likes, userLikes, img, color }) => {

    const { user, userB, setUserB } = useContext(UserContext);
    const { setShowDeleteAlert, setTweetToDelete, setLoadingTweets } = useContext(TweetsContext);
    const { addLikes } = useTweets();

    const handleDelete = () => {
        setShowDeleteAlert(true);
        setTweetToDelete({ id: id, uid: uid });
    }

    const handleUserBInfo = () => {
        const newUserB = {
            ...userB,
            username: username,
            uid: uid,
            photo: img,
            color: color,
        }
        setUserB(newUserB);
        setLoadingTweets(true);
    }

    const handleLoading = () => {
        setLoadingTweets(true);
    }

    const handleLikes = () => {
        addLikes(id, user.uid, userB.uid);
    }


    function dateSensitive(date) {
        let newDate = new Date(date);
        let options = { month: 'short', day: 'numeric', timeZone: 'GMT' };
        let newDateSensitive = newDate.toLocaleDateString('es-ES', options);
        return (date === "") ? "Cualquier fecha" : newDateSensitive;
    }

    return (
        <div className="tweet-container">
            {user && uid === user.uid ?
                <Link to={"/profile-user/posts"} onClick={handleLoading} className="tweet-user-img">
                    <img claseName={img-user} src={img} alt="image-user" />
                </Link>
                : <Link to={"/profile-user-B"} onClick={handleUserBInfo} className="tweet-user-img">
                    <img claseName={img-user} src={img} alt="image-user" />
                </Link>
            }
            <div className="tweet-info column">
                <div className="tweet-header flex-between-center">
                    <div>
                        <span className={`user-name bg-${color}`}>{username}</span>
                        <span>{` - ${dateSensitive(date)}.`}</span>
                    </div>
                    {user && uid === user.uid && <button claseName="trash-button" onClick={handleDelete}><DeleteButton/></button>}
                </div>
                <div className="tweet-text">
                    <p>{tweet}</p>
                </div>
                <div className='tweet-like align-center'> 
                    
                    {likes ? 
                    <img onClick={handleLikes} src={FilledHeart} alt="heart"/> : 
                    <img onClick={handleLikes} src={EmptyHeart} alt="empty heart" /> }

                    {likes && <span 
                    className={`${likes>0 ? "red-font" : ""}`}
                    >{likes}</span>}
                </div>
            </div>
        </div>
    )
}

export default Tweet