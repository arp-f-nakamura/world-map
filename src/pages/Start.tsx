import classes from "./css_modules/Start.module.css";

function Start() {
    return (
        <div className={classes.div}>
            <img src="/logo.svg" className="App-logo" alt="logo" />
            <button>Start Game</button>
        </div>
    );
}

export default Start;
