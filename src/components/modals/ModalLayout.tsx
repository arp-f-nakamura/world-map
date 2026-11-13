import styles from "./css_modules/ModalLayout.module.css";

type ModalLayoutProps = {
    isOpen: boolean;
    children: React.ReactNode;
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
