import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { TweetsContext } from './context/TweetsContext';

/*Other*/
import Loader from "./Componentes/Loader";
import DeleteAlert from './Componentes/Tweet/DeletAlert';

/*Authentification */
import LayoutAuth from "./Componentes/Authentification/LayoutAuth";
import Login from "./Componentes/Authentification/Login";
import Register from "./Componentes/Authentification/Register";
/*Profile_Me */
import Feed from "./Componentes/Feed";
import LayoutProfile from './Componentes/Profile_Me/LayoutProfile';
import ProfileFavorites from './Componentes/Profile_Me/ProfileFavorites';
import ProfilePosts from './Componentes/Profile_Me/ProfilePosts';
import ProfileUserB from './Componentes/ProfileUserB';

function App() {
  const { user,googleUser, loading } = useContext(UserContext);
  const { tweetToDelete, showDeleteAlert } = useContext(TweetsContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutAuth />} >
          <Route index element={<Login />} />.
          {googleUser && (
            <Route path="/register" element={loading ? <Loader /> : <Register />} />
          )} 
        </Route>
        {user && (
          <>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile-user" element={<LayoutProfile />} >
              <Route index element={<ProfilePosts />} />
              <Route path="/profile-user/posts" element={<ProfilePosts />} />
              <Route path="/profile-user/favorites" element={<ProfileFavorites />} />
            </Route>
            <Route path="/profile-user-B" element={<ProfileUserB />} />
            
          </>
        )}
        <Route path="*" element={!user && <Navigate to="/" />} />
      </Routes>
      {showDeleteAlert && <DeleteAlert id={tweetToDelete.id} uid={tweetToDelete.uid} />}
    </div>
  );
}

export default App;