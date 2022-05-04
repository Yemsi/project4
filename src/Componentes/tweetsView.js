import React from "react";
import Header from "./Header";
import TweetForm from "./TweetForm";
import TweetsList from "./TweetList";

function TweetsView() {
  return (
    <div>
      <Header />
      <TweetForm />
      <TweetsList />
    </div>
  );
}

export default TweetsView;