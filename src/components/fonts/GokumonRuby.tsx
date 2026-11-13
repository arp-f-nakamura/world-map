import { useState } from "react";
import { useLanguageData } from "../../hooks/useLanguageData";
import { FontDecipheringModal } from "../modals/FontDecipheringModal";
import styles from "./css_modules/font.module.css";

export const GokumonRuby = ({ word }: { word: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const languageData = useLanguageData();
    const meaning =
        languageData.find((item) => item.word === word)?.meaning ?? "";

    return (
        <>
            <a
                className={styles.gokumon}
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <ruby>
                    {word}
                    <rt className={styles.rt}>{meaning}</rt>
                </ruby>
            </a>
            <FontDecipheringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                font="gokumon"
                word={word}
                meaning={meaning}
            />
        </>
    );
};
