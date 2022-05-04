import "./styles.css";
import LandingPage from "./Componentes/LandingPage";
import TweetsView from "./Componentes/tweetsView";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { 
  Routes, 
  Route, 
  useNavigate 
} from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";

function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  user ? navigate("/home") : navigate("/landing"); //landing y no LandingPage

  return <div className="App">hola</div>;
}

export default App;
