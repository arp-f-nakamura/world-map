import { Test } from "../../constans/test";
import styles from "./css_modules/TestTab.module.css";

type TestTabProps = {
    tests: Test[];
};

export const TestTab = ({ tests }: TestTabProps) => {
    return (
        <div className={styles.div}>
            {tests.map((test) => (
                <div className={styles.question}>
                    {test.question}
                    <div className={styles.answer}>
                        <button>{test.answerA}</button>
                        <button>{test.answerB}</button>
                        <button>{test.answerC}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
