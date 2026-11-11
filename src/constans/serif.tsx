import { ReactNode } from "react";
import character from "../assets/images/character/demo_character.png";
import styles from "./css_modules/serif.module.css";

export type Serif = {
    positionA?: string;
    positionB?: string;
    positionC?: string;
    text: ReactNode;
};

export const object1Serif: Serif[] = [
    {
        positionA: character,
        text: (
            <>
                <a
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("Gokumon clicked");
                    }}
                    className={styles.gokumon}
                >
                    0123
                </a>
            </>
        ),
    },
    {
        positionB: character,
        text: (
            <>
                <a
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("Gokumon clicked");
                    }}
                    className={styles.gokumon}
                >
                    4567
                </a>
            </>
        ),
    },
    {
        positionC: character,
        text: (
            <>
                <a
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("Gokumon clicked");
                    }}
                    className={styles.gokumon}
                >
                    890?
                </a>
            </>
        ),
    },
];

export const object2Serif: Serif[] = [
    {
        positionA: character,
        positionC: character,
        text: (
            <>
                <a
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("Gokumon clicked");
                    }}
                    className={styles.gokumon}
                >
                    ABCD
                </a>
            </>
        ),
    },
    {
        positionA: character,
        positionB: character,
        positionC: character,
        text: (
            <>
                <a
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("Gokumon clicked");
                    }}
                    className={styles.gokumon}
                >
                    EFGH
                </a>
            </>
        ),
    },
];
