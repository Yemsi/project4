import React, { useEffect, useState } from 'react';
import UseTweet from './UseTweet';
import Tweet from "./Tweet";
import './App.css';

const { getAllDocs } = useTweetCollection();
const { listaTweets } = useContext(TweetsContext);



const ListTweets = () => {
    useEffect(() => {

    }, []);

    return (
        <div className='listWrapper'>
            {listaTweets.length > 0 ? 
            listaTweets.map((element) => (
                <Tweet
                key={element.id}
                id={element.id}
                text={element.tweet}
                author={element.author}
                date={element.date}
                />
            )): "aún no hay tweets"}
            
        </div>
    )
}

export default ListTweets;