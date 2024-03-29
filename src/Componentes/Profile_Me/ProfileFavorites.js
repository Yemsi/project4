import { useContext } from "react";
import { TweetsContext } from "../../context/TweetsContext";
import { UserContext } from "../../context/UserContext";
import Loader from "../../Componentes/Loader";
import ListTweets from "../../Componentes/Tweet/ListTweets";

const ProfileFavorites = () => {

    const { user } = useContext(UserContext);
    const { tweetsList, loadingTweets } = useContext(TweetsContext);

    const favoriteTweets = tweetsList.filter(post => {
        //console.log(`test: ${post.userLikes} == (${user.uid})`);
        //? use: error: is not a component
        if (post.userLikes?.includes(user.uid)) {
            return post;
        }
    });

    return (
        <div>
            <div>
                {loadingTweets ? <Loader /> : <ListTweets tweets={favoriteTweets} />}
            </div>
        </div>
    )

}



export default ProfileFavorites;