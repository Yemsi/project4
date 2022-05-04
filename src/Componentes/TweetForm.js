import "../styles.css";
import React, { useState, useContext  } from "react";
import useTweetCollection from "../hook/UseTweetCollection";
import { UserContext } from "../context/UserContext";

const initialState = {
  text: "",
  userInfo: { author: "", uid: "", email: "" },
};

function TweetForm() {
  const [formstate, setFormstate] = useState(initialState);

  const { user } = useContext(UserContext);
  const { addNewTweet } = useTweetCollection();

  const handleChange = (e) => {
    setFormstate({
      ...formstate,
      text: e.target.value,
      userInfo: {
        author: user ? user.displayName : "Unknown",
        uid: user && user.uid,
        email: user && user.email,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTweet(formstate);

    setFormstate(initialState);
  };

  return (
    <div className="form-area">
      <img className="photo" src={user.photoURL} alt="profile" />
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="text-area"
          placeholder="What's happening?"
          name="tweet"
          value={formstate.text}
          onChange={handleChange}
        />
        <button className="post-button" type="submit">
          POST
        </button>
      </form>
    </div>
  );
}

export default TweetForm;