import classes from "./css_modules/Start.module.css";
import { useNavigate } from "react-router-dom";

function Start() {
    const navigate = useNavigate();

    return (
        <div className={classes.div}>
            <img src="/logo.svg" className="App-logo" alt="logo" />
            <button onClick={() => navigate("/game")}>Start Game</button>
        </div>
    );
}

export default Start;
