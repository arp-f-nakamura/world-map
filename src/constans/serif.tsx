import { ReactNode } from "react";
import character from "../assets/images/character/demo_character.png";
import styles from "./css_modules/serif.module.css";

type Serif = {
    character: string;
    serif: ReactNode;
};

export const object1Serif: Serif[] = [
    {
        character: character,
        serif: (
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
        character: character,
        serif: (
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
];

export const object2Serif: Serif[] = [
    {
        character: character,
        serif: (
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
    {
        character: character,
        serif: (
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
];
