//style
import "../styles.css";
import LoadingLogo from "../image/LoadingLogo.png"

function Loader() {
  return (
    <div className="alert">
    <div className="delete-alert align-center">
          <img 
            className="loader-img loading" 
            src={LoadingLogo} 
            alt="loading">
          </img>
    </div>
    </div>
  );
}

export default Loader;