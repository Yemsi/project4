//style
import "../styles.css";
import React, { useContext, useEffect } from "react";
import { TweetsContext } from "../context/TweetContext";
import useTweetCollection from "../hook/UseTweetCollection";
import Tweet from "./Tweet";

function TweetsList() {
  const { tweetsArray } = useContext(TweetsContext);
  const { getTweets } = useTweetCollection();

  useEffect(() => {
    const getTweetsAsync = async () => {
      const allTweets = await getTweets();
    };
    getTweetsAsync();

    //para mantener la página abierta
    setTimeout(() => {
      getTweetsAsync();
    }, 70000);
  }, []);

  return (
    <div className="tweetsList">
    {tweetsArray.length > 0 ? (
      tweetsArray.map((object) => {
        return <Tweet key={object.id} tweetData={object} />;
      })
    ) : (
      <div className="loading"></div>
    )}
    </div>
  );
}

export default TweetsList;