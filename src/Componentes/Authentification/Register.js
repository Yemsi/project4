import React from "react";
import { useContext } from "react";
import useUsers from "../../hook/useUsers";
import { UserContext } from "../../context/UserContext";
import { TweetsContext } from "../../context/TweetsContext";

const Register = () => {

    //Contexto de user
    const {googleUser, user, setUser, setLoading} = useContext(UserContext);
    const { setLoadingTweets } =  useContext(TweetsContext);
    // Custom Hoot Add User
    const { addNewUser } = useUsers();

    const handleChange = (e) => {
        const newUser = {
            ...user,
            name: googleUser.displayName,
            email: googleUser.email,
            uid: googleUser.uid,
            photo: googleUser.photoURL,
            [e.target.name]: e.target.value  
        }
        setUser(newUser);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNewUser(user)
        setLoading(true);
        setLoadingTweets(true);
    }
    
    return (
        <div >
            <h2>WELCOME
                {googleUser && <p className="register-name red-font">{googleUser.displayName}!</p>}
            </h2>
            <form className="column"  onSubmit={handleSubmit}>
                <input className="register-username" type="text" name="username"  onChange={handleChange} placeholder="Type your username" required />
                <p className="pad_10">Select your favorite color</p>
                <div  onChange={handleChange}  className="radio-container flex-between-center">
                    <input className="bg-red" type="radio" id="red" name="color" value="red" ></input>
                    <input className="bg-orange" type="radio" id="orange" name="color" value="orange"></input>
                    <input className="bg-yellow" type="radio" id="yellow" name="color" value="yellow"></input>
                    <input className="bg-green" type="radio" id="green" name="color" value="green"></input>
                    <input className="bg-blue" type="radio" id="blue" name="color" value="blue"></input>
                    <input className="bg-purple" type="radio" id="purple" name="color" value="purple"></input>
                </div>
                <button type="submit" className=" register-button white-font ">
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default Register;