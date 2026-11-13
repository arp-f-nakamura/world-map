import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResetModal } from "../components/modals/ResetModal";
import classes from "./css_modules/Start.module.css";

function Start() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classes.div}>
            <img src="/logo.svg" className="App-logo" alt="logo" />
            <button onClick={() => navigate("/tutorial")}>はじめから</button>
            <button>つづきから</button>
            <button onClick={() => setIsOpen(true)}>言語リセット</button>
            <ResetModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Start;
