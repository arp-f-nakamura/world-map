import { useContext } from "react";
import { Test } from "../../constans/test";
import {
    TestDataDispatchContext,
    TestDataStateContext,
} from "../../contexts/TestContext";
import styles from "./css_modules/TestTab.module.css";

type TestTabProps = {
    tests: Test[];
};

export const TestTab = ({ tests }: TestTabProps) => {
    const testData = useContext(TestDataStateContext);
    const dispatch = useContext(TestDataDispatchContext);

    if (testData === undefined || dispatch === undefined) {
        throw new Error("TestTab must be rendered inside TestDataProvider");
    }

    return (
        <div className={styles.div}>
            {tests.map((test, index) => (
                <div className={styles.question} key={index}>
                    {test.question}
                    <div className={styles.answer}>
                        {(["A", "B", "C"] as const).map((answer) => (
                            <button
                                key={answer}
                                className={
                                    testData[index]?.answer === answer
                                        ? styles.isSelect
                                        : undefined
                                }
                                onClick={() =>
                                    dispatch({
                                        type: "SET_ANSWER",
                                        payload: { index, answer },
                                    })
                                }
                            >
                                {test[`answer${answer}`]}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
