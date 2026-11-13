import { useNavigate } from "react-router-dom";
import { ModalLayout } from "./ModalLayout";
import classes from "./css_modules/MenuModal.module.css";
import icon from "../../assets/images/icons/demo_icon.png";
import { useState } from "react";

type MenuModalProps = {
    isOpen: boolean;
    stage?: "word" | "test" | "recollection";
    onClose: () => void;
};

export const MenuModal = ({ isOpen, stage, onClose }: MenuModalProps) => {
    const navigate = useNavigate();
    const [viewModal, setViewModal] = useState<
        "menu" | "word" | "test" | "recollection"
    >("menu");

    return (
        <ModalLayout isOpen={isOpen}>
            <div className={classes.div}>
                <button
                    className={classes.button}
                    disabled={
                        stage && stage !== "word" && stage !== "recollection"
                    }
                    onClick={() => setViewModal("word")}
                >
                    <img src={icon} className={classes.icon} />
                    言葉
                </button>
                <button
                    className={classes.button}
                    disabled={
                        stage &&
                        stage !== "test" &&
                        stage !== "word" &&
                        stage !== "recollection"
                    }
                    onClick={() => setViewModal("test")}
                >
                    <img src={icon} className={classes.icon} />
                    試練
                </button>
                <button
                    className={classes.button}
                    disabled={stage && stage !== "recollection"}
                    onClick={() => setViewModal("recollection")}
                >
                    <img src={icon} className={classes.icon} />
                    回想
                </button>
                <button
                    className={classes.button}
                    disabled={stage !== undefined}
                    onClick={() => navigate("/")}
                >
                    <img src={icon} className={classes.icon} />
                    離脱
                </button>
            </div>
            {viewModal === "word" && <p>言葉を選択中</p>}
            {viewModal === "test" && <p>試練を選択中</p>}
            {viewModal === "recollection" && <p>回想を選択中</p>}
            <button
                onClick={() => {
                    onClose();
                    setViewModal("menu");
                }}
            >
                閉
            </button>
        </ModalLayout>
    );
};
