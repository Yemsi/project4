import HeaderFeed from '../Componentes/Tweet/HeaderFeed';
import TweetForm from '../Componentes/Tweet/TweetForm';
import ListTweets from "../Componentes/Tweet/ListTweets";
import Loader from '../Componentes/Loader';
import useTweets from '../hook/useTweets';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { TweetsContext } from '../context/TweetsContext';

const Feed = () => {
    const { user } = useContext(UserContext);
    const { tweetsList, loadingTweets } = useContext(TweetsContext);
    const { getAllTweets } = useTweets();

    useEffect(() => {
        const tweets = async () => await getAllTweets();
        tweets();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <HeaderFeed color={user.color} photo={user.photo} />
            <TweetForm />
            {loadingTweets ? <Loader /> : <ListTweets tweets={tweetsList} />}
        </div>
    )
}

export default Feed;