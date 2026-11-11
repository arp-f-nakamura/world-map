import character from "../assets/images/character/demo_character.png";
import styles from "./css_modules/Footer.module.css";

type FooterProps = {
    displayMessage: boolean;
    setDisplayMessage: React.Dispatch<React.SetStateAction<boolean>>;
};
const Footer = ({ displayMessage, setDisplayMessage }: FooterProps) => {
    return displayMessage ? (
        <>
            <button
                type="button"
                aria-label="メッセージを閉じる"
                onClick={() => setDisplayMessage(false)}
                className={styles.button}
            ></button>
            {/* React：キャラ立ち絵 */}
            <div className={styles.characterImage}>
                <img src={character} alt="Character" />
            </div>
            {/* React：メッセージウィンドウ */}
            <div
                className={styles.messageWindow}
                onClick={() => {
                    setDisplayMessage(false);
                    console.log("メッセージウィンドウがクリックされました");
                }}
            >
                <p>ここにメッセージを表示します。</p>
                <a
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("Gokumon clicked");
                    }}
                    className={styles.gokumon}
                >
                    0123
                </a>
            </div>
        </>
    ) : (
        <button className={styles.messageWindow}>MENU</button>
    );
};

export default Footer;
