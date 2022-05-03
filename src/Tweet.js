import React from 'react';
import UseTweet from './UseTweet';
import './App.css';

export const Tweet = ({text, author, date, id}) => {



    return (
        <div className='tweetWrapper'>
            <h3>{ text}</h3>
            <p>author</p>
            <code>fecha del tweet</code>
            <button 
            onClick={handleDelete (id)}>
                <img src=''></img>borrar</button>
        </div>
    )
}
export default Tweet;