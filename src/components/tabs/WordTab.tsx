import { languageData } from "../../contexts/LanguageContext";
import { GokumonRuby } from "../fonts/GokumonRuby";
import styles from "./css_modules/WordTab.module.css";

type WordTabProps = {
    words: languageData[];
};

export const WordTab = ({ words }: WordTabProps) => {
    return (
        <div className={styles.div}>
            {words.map((word) => {
                return <GokumonRuby word={word.word} />;
            })}
        </div>
    );
};
