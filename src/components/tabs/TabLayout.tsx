import { ReactNode } from "react";
import styles from "./css_modules/TabLayout.module.css";

type TabLayoutProps = {
    children?: ReactNode;
};

export const TabLayout = ({ children }: TabLayoutProps) => {
    return (
        <div className={styles.div}>
            {children ? (
                children
            ) : (
                <div className={styles.stack}>
                    <h1 className={styles.emptycontent}>営為製作中</h1>
                    <p className={styles.emptycontent}>更新を待つべし</p>
                </div>
            )}
        </div>
    );
};
