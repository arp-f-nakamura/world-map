import { Dispatch, useRef } from "react";
import { useLanguageDataDispatch } from "../../hooks/useLanguageData";
import { ModalLayout } from "./ModalLayout";
import styles from "./css_modules/FontDecipheringModal.module.css";

type FontDecipheringModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
    font: keyof typeof styles;
    word: string;
    meaning: string;
};

export const FontDecipheringModal = ({
    isOpen,
    setIsOpen,
    font,
    word,
    meaning,
}: FontDecipheringModalProps) => {
    const languageDataDispatch = useLanguageDataDispatch();
    const meaningInputRef = useRef<HTMLInputElement>(null);

    return (
        <ModalLayout isOpen={isOpen}>
            <p className={styles[font]}>{word}</p>
            <input
                ref={meaningInputRef}
                defaultValue={meaning}
                className={styles.input}
            />
            <button
                onClick={() => {
                    const input = meaningInputRef.current;
                    if (!input) {
                        throw new Error("Meaning input is not available");
                    }

                    languageDataDispatch({
                        type: "SET_MEANING",
                        payload: { word, meaning: input.value },
                    });
                    setIsOpen(false);
                }}
            >
                閉
            </button>
        </ModalLayout>
    );
};
