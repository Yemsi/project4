import React, { useEffect, useState } from 'react';
import UseTweet from './UseTweet';
import Tweet from "./Tweet";
import './App.css';

export const ListTweets = () => {
    return (
        <div className='listWrapper'>
            {listaTweet.length > 0 ? 
            listaTweet.map((element) => (
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