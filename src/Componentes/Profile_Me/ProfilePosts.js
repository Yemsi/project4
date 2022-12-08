import { useEffect } from "react";
import { useContext } from "react";
import { TweetsContext } from "../../context/TweetsContext";
import { UserContext } from "../../context/UserContext";
import useTweets from "../../hook/useTweets";
import ListTweets from "../../Componentes/Tweet/ListTweets";
import Loader from "../../Componentes/Loader";

const ProfilePosts = () => {

    const { getUserTweets } = useTweets()
    const { user } = useContext(UserContext);
    const { tweetsUserList, loadingTweets } = useContext(TweetsContext);

    useEffect(()=> {
        const myTweets = async () => await getUserTweets(user.uid);
        myTweets();
    },[])

    return (
        <div 
        //className="layout-posts"
        >
            {loadingTweets ? <Loader /> : <ListTweets tweets={tweetsUserList} />}
        </div>
    )
}

export default ProfilePosts;