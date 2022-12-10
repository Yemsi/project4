//style
import "../../styles.css";
import { useState } from 'react';
import { initialTweetFormState } from '../../Componentes/constant';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import useTweets from '../../hook/useTweets';

const TweetForm = () => {
    const [formState, setFormState] = useState(initialTweetFormState);
    const { user } = useContext(UserContext);
    const { addNewTweet } = useTweets();

    const actualDate = () => {
        let actualDate = new Date(),
            month = "" + (actualDate.getMonth() + 1),
            day = "" + actualDate.getDate(),
            year = actualDate.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    }

    const handleChange = (e) => {
        const length = e.target.value.length

        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            username: user.username,
            uid: user.uid,
            photo: user.photo,
            color: user.color,
            length: length,
            date: actualDate()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTweet(formState);
        setFormState(initialTweetFormState);
    }

    return (
        <div className="main-form">
            <div className="form-img-cointener mg-auto">
                <img 
                    className="img-user" 
                    src={user.photo} 
                    alt="image-user" />
                <div className="column">
                    <form 
                        className="column" 
                        onSubmit={handleSubmit}>
                        <textarea 
                            className="form-text-area"
                            onChange={handleChange} 
                            value={formState.tweet} 
                            name="tweet" cols="40" rows="10" maxLength={200} 
                            placeholder="What's happening?">                           
                        </textarea>
                            <div className="form-counter flex-between-center">
                                <span className={`inline-block white-font ${formState.length === 200 && "bg-green"}`}>
                                    {formState.length}
                                </span>
                                <span className="red-font inline-block">
                                        200 max.
                                </span>
                            </div>
                        <button 
                            className='font-press-2p bg-font button-post' 
                            type='submit'>POST</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TweetForm;