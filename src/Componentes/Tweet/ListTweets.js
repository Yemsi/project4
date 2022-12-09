
//style
import "../../styles.css"
import Tweet from "../../Componentes/Tweet/Tweet";
//import NotFoundAlert from '../../Componentes/NotFoundAlert';

const ListTweets = ({ tweets }) => {

    return (
        <div>
            <div className="list-tweets mg-auto column">
                {tweets.length > 0
                    ? tweets.map(tweet => (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            tweet={tweet.tweet}
                            username={tweet.username}
                            uid={tweet.uid}
                            date={tweet.date}
                            likes={tweet.likes}
                            userLikes={tweet.userLikes}
                            img={tweet.photo}
                            color={tweet.color}
                        />
                    ))
                    :   <div>
                            <span>No hay tweets</span>
                        </div>}
            </div>

        </div>
    )
}

export default ListTweets;