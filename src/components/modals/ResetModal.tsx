import { Dispatch } from "react";
import { ModalLayout } from "./ModalLayout";
import { useLanguageDataDispatch } from "../../hooks/useLanguageData";
import styles from "./css_modules/ResetModal.module.css";

type ResetModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const ResetModal = ({ isOpen, setIsOpen }: ResetModalProps) => {
    const languageDataDispatch = useLanguageDataDispatch();

    return (
        <ModalLayout isOpen={isOpen}>
            <p className={styles.p}>すべての言語をリセットしますか？</p>
            <div className={styles.div}>
                <button
                    onClick={() => {
                        setIsOpen(false);
                        languageDataDispatch({ type: "RESET" });
                    }}
                >
                    はい
                </button>
                <button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    いいえ
                </button>
            </div>
        </ModalLayout>
    );
};
