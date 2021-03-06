//style
import "../styles.css";
//image
import trashcan from "../image/erase.svg";
import heart from "../image/heart.svg";
//react
import React, {useContext} from 'react';
//hook
import useTweetCollection from "../hook/UseTweetCollection";
//context
import { UserContext } from "../context/UserContext";


export const Tweet = ({ tweetData }) => {
  const { text, id, userInfo, likes } = tweetData;
  console.log("userInfo", userInfo)
const { user } = useContext(UserContext);
const { deleteTweet, addLikes } = useTweetCollection();

return (
  <div className="tweet-card">
    <img className="photo-tweet" src={userInfo.photo} alt="profile" />
    <div>
      <span className="username">{userInfo.author}</span>
      <span className="email"> - {userInfo.email}</span>
      <p className="tweet-text-area">{text}</p>
      <div className="likes">
        <img
          className="heart"
          onClick={() => addLikes(id)}
          src={heart}
          alt="heart"
        />
        {likes && <span className="number-likes">{likes}</span>}
      </div>
      <span className="line">
        ___________________________________________
      </span>
    </div>
    {user.uid === userInfo.uid && (
      <button className="trashcan-button" onClick={() => deleteTweet(id)}>
        <img src={trashcan} alt="trashcan" />
      </button>
    )}
  </div>
);
}
export default Tweet;