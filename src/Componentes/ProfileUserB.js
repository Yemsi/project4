//style
import "../styles.css";
import {     
    useEffect,     
    useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TweetsContext } from "../context/TweetsContext";
import useTweets from "../hook/useTweets";
import HeaderProfile from "./Tweet/HeaderProfile";
import UserInfo from "./Tweet/UserInfo";
import ListTweets from "./Tweet/ListTweets";
import Loader from "./Loader";

const ProfileUserB = () => {

    const { userB } = useContext(UserContext);
    const { getUserTweets } = useTweets();
    const { tweetsUserList, loadingTweets } = useContext(TweetsContext);

    useEffect(() => {
        const tweetsUserB = async () => await getUserTweets(userB.uid);
        tweetsUserB();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <HeaderProfile 
                username={userB.username} 
                enableLogOut={false} >
            </HeaderProfile>
            <UserInfo 
                color={userB.color} 
                photo={userB.photo} 
                username={userB.username} 
                enableTab={false}>
            </UserInfo>

            {loadingTweets ? <Loader /> : <ListTweets tweets={tweetsUserList} />}
        </div>
    )
}

export default ProfileUserB;