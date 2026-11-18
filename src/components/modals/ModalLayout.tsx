import { ReactNode } from "react";
import styles from "./css_modules/ModalLayout.module.css";

type ModalLayoutProps = {
    isOpen: boolean;
    children: ReactNode;
};

export const ModalLayout = ({ isOpen, children }: ModalLayoutProps) => {
    return (
        isOpen && (
            <div className={styles.overlay}>
                <div className={styles.content}>{children}</div>
            </div>
        )
    );
};
