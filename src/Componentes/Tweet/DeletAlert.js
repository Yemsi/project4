//style
import "../../styles.css";

import { useContext } from 'react';
import { TweetsContext } from '../../context/TweetsContext';
import useTweets from '../../hook/useTweets';
import { initialTweetToDelete } from '../../Componentes/constant';

const DeleteAlert = ({id, uid}) => {

    const { setShowDeleteAlert, setTweetToDelete } = useContext(TweetsContext);
    const { deleteTweet } = useTweets();

    const handleCanceleDelete = () => {
        setShowDeleteAlert(false);
        setTweetToDelete(initialTweetToDelete);
    }
    return (
        <div className="align-center alert">
            <div className="delete-alert align-center column">
                <p>¿Estás segurx de borrar?</p>
                <button className='welcome-button' onClick={() => deleteTweet(id, uid)}>Delete</button>
                    <button className=' welcome-button' onClick={handleCanceleDelete}>Cancel</button>
                <div >
                    
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert;