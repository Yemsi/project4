import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";
import logo2 from "../../images/group-2.svg";
import { Link } from "react-router-dom";
import useGoogleAuthentication from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import { TweetsContext } from "../../contexts/TweetsContext";
import Tweet from "../Tweet/tweet";

function Profile() {
    const navigate = useNavigate();
    const { logout } = useGoogleAuthentication();
    const { tweetsArray } = useContext(TweetsContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
    if (user === null) {
    navigate("/");
    }
    }, [user]);

    const myTweets = tweetsArray.filter(
    (tweet) => tweet.userInfo?.uid === user?.uid
    );

    return (
    <div>
        <div className="header-profile">
            <Link to="/home">
            <img className="logo-profile" src={logo2} alt="logo-flag" />
            </Link>
            <button className="logout" onClick={logout}>
            LOGOUT
            </button>
        </div>
        <div className="middle">
            <img className="profile-picture" src={user?.photoURL} alt="none" />
            <span className="profile-name">{user?.displayName}</span>
        </div>
        <div className="posts">
            {myTweets.length > 0
            ? myTweets.map((userTweet) => {
                return <Tweet key={userTweet.id} tweetData={userTweet} />;
                })
            : "You don't have any tweets"}
        </div>
    </div>
);
}

export default Profile;