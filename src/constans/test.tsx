import { ReactNode } from "react";
import { GokumonRuby } from "../components/fonts/GokumonRuby";
import styles from "./css_modules/test.module.css";

export type Test = {
    question: ReactNode;
    answerA: ReactNode;
    answerB: ReactNode;
    answerC: ReactNode;
};

export const gokumonTest: Test[] = [
    {
        question: (
            <div className={styles.div}>
                <GokumonRuby word="?" />
                <GokumonRuby word="AD" />
                <GokumonRuby word="2" />
            </div>
        ),
        answerA: <p className={styles.p}>眼殊</p>,
        answerB: <p className={styles.p}>晏眼</p>,
        answerC: <p className={styles.p}>芔狭眼</p>,
    },
    {
        question: (
            <div className={styles.div}>
                <GokumonRuby word="?" />
                <GokumonRuby word="b" />
                <GokumonRuby word="BF" />
            </div>
        ),
        answerA: <p className={styles.p}>芔狭眼</p>,
        answerB: <p className={styles.p}>焱眼</p>,
        answerC: <p className={styles.p}>淼眼</p>,
    },
    {
        question: (
            <div className={styles.div}>
                <GokumonRuby word="CD" />
                <GokumonRuby word="!" />
                <GokumonRuby word="c" />
                <GokumonRuby word="8" />
                <GokumonRuby word="K" />
                <GokumonRuby word="d" />
            </div>
        ),
        answerA: <GokumonRuby word="8" isLink={false} />,
        answerB: <GokumonRuby word="?" isLink={false} />,
        answerC: <GokumonRuby word="9" isLink={false} />,
    },
    {
        question: (
            <div className={styles.div}>
                <GokumonRuby word="!" />
                <GokumonRuby word="?" />
                <GokumonRuby word="KL" />
                <GokumonRuby word="e" />
            </div>
        ),
        answerA: <GokumonRuby word="G0" isLink={false} />,
        answerB: <GokumonRuby word="GI" isLink={false} />,
        answerC: <GokumonRuby word="GH" isLink={false} />,
    },
    {
        question: (
            <div className={styles.div}>
                <GokumonRuby word="l" />
                <GokumonRuby word="?" />
                <GokumonRuby word="GJ" />
            </div>
        ),
        answerA: <GokumonRuby word="Q" isLink={false} />,
        answerB: <GokumonRuby word="R" isLink={false} />,
        answerC: <GokumonRuby word="T" isLink={false} />,
    },
];
