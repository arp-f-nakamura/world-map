import { ReactNode } from "react";
import styles from "./css_modules/Footer.module.css";

type FooterProps = {
    displayMessage: boolean;
    character: string;
    serif: ReactNode;
    onClick: () => void;
};
const Footer = ({ displayMessage, character, serif, onClick }: FooterProps) => {
    return (
        displayMessage && (
            <>
                <button
                    type="button"
                    aria-label="メッセージを閉じる"
                    onClick={onClick}
                    className={styles.button}
                ></button>
                {/* React：キャラ立ち絵 */}
                <div className={styles.characterImage}>
                    <img src={character} alt="Character" />
                </div>
                {/* React：メッセージウィンドウ */}
                <div className={styles.messageWindow} onClick={onClick}>
                    {serif}
                </div>
            </>
        )
    );
};

export default Footer;
