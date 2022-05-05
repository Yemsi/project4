//style
import "../styles.css";
//image
import logo2 from "../image/group-2.svg";
import post from "../image/post.svg";
//react
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//context
import { UserContext } from "../context/UserContext";
import { TweetsContext } from "../context/TweetContext";
//hook
import useGoogleAuthentication from "../hook/UseAuthentication";
import Tweet from "../Componentes/Tweet";

function Profile() {

  const [fondo, setFondo] = useState(true);

    const { logout } = useGoogleAuthentication();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { tweetsArray } = useContext(TweetsContext);
  
    useEffect(() => {
      if (user === null) {
        navigate("/");
      }
    }, [user]);
  
    const myTweets = tweetsArray.filter(
      (tweet) => tweet.userInfo?.uid === user?.uid
    );
  
//console.log("myTweets",myTweets);

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
          <img className="profile-picture" src={user?.photoURL} alt="foto" />
          <span className="profile-name">{user?.displayName}</span>
        </div>
        <div className='button_select'>
                <button fondo="fondo" onClick={() => setFondo(!fondo)}  className={`${fondo ? "dark": "button_active"}`} >
                        {` ${fondo ? "" : "POST"}`}
                </button>
                <button  fondo="fondo" onClick={() => setFondo(!fondo)} className={`${!fondo ? "dark": "button_active"}`}>
                  {` ${!fondo ? "" : " FAVORITES"}`}

                    </button>
            </div>
        <div className="posts">
          {myTweets.length > 0
            ? myTweets.map((userTweet) => {
                return <Tweet 
                key={userTweet.id} 
                tweetData={userTweet} />;
              })
            : "You don't have any tweets"}
        </div>
      </div>
    );
  }
  
  export default Profile;