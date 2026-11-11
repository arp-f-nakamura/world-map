import { Serif } from "../constans/serif";
import styles from "./css_modules/Footer.module.css";

type FooterProps = {
    displayMessage: boolean;
    serif: Serif;
    onClick: () => void;
};
const Footer = ({ displayMessage, serif, onClick }: FooterProps) => {
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
                {serif.positionA && (
                    <div className={styles.positionA}>
                        <img src={serif.positionA} alt="Character" />
                    </div>
                )}
                {serif.positionB && (
                    <div className={styles.positionB}>
                        <img src={serif.positionB} alt="Character" />
                    </div>
                )}
                {serif.positionC && (
                    <div className={styles.positionC}>
                        <img src={serif.positionC} alt="Character" />
                    </div>
                )}
                {/* React：メッセージウィンドウ */}
                <div className={styles.messageWindow} onClick={onClick}>
                    {serif.text}
                </div>
            </>
        )
    );
};

export default Footer;
