import { ReactNode } from "react";
import character from "../assets/images/character/demo_character.png";
import { GokumonRuby } from "../components/fonts/GokumonRuby";
import styles from "./css_modules/serif.module.css";

export type Serif = {
    positionA?: string;
    positionB?: string;
    positionC?: string;
    character: string;
    text: ReactNode;
};

export const object1Serif: Serif[] = [
    {
        positionA: character,
        character: "",
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
        character: "",
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
        character: "",
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
        character: "",
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
        character: "",
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

// チュートリアルのセリフ
export const tutorialSerif: Serif[] = [
    {
        character: "？？？",
        text: (
            <p className={styles.serif}>
                よう。
                <br />
                お前さんが、ウチで働きたいってやつかぃ。
            </p>
        ),
    },
    {
        positionC: character,
        character: "？？？",
        text: (
            <p className={styles.serif}>
                わざわざ履歴書なんぞ拵えちまってまぁ…。
            </p>
        ),
    },
    {
        positionC: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                あー、っと。
                <br />
                俺ぁ店主の
                <ruby>
                    眼殊<rt>まこと</rt>
                </ruby>
                だ。
            </p>
        ),
    },
    {
        positionC: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                従業員なんざ募集して無ぇし、面接だの何だのは苦手なんだが………
            </p>
        ),
    },
    {
        positionC: character,
        character: "主人公",
        text: <p className={styles.serif}>………。</p>,
    },
    {
        positionC: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                あーあー、わぁったよ。
                <br />
                ウチで働きたいってんなら、条件を出す。
                <br />
                まずは此処を見てみな。
            </p>
        ),
    },
    {
        positionC: character,
        character: "眼殊",
        text: <p className={styles.serif}>これを全部解けりゃ合格だ。</p>,
    },
    {
        positionC: character,
        character: "主人公",
        text: <p className={styles.serif}>！？</p>,
    },
    {
        positionC: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                おいおい、こんなんで音を上げてちゃぁウチの仕事なんざできねぇぞ？
            </p>
        ),
    },
    {
        positionC: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                ウチは<span className={styles.span}>色んな</span>
                お客がやってくる。
                <br />
                そいつが何言ってるか分からなきゃ、オハナシにもならねぇだろ？
            </p>
        ),
    },
    {
        positionC: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                お前さんの目で世界を見て回って、少しずつ言葉を覚えていきゃぁ良い。
            </p>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                おい、
                <ruby>
                    芔狭眼<rt>さかさま</rt>
                </ruby>
                、案内してやれ。
            </p>
        ),
    },
    {
        positionA: character,
        positionB: character,
        character: "芔狭眼",
        text: (
            <>
                <div className={styles.div}>
                    <GokumonRuby word="8" />
                    <GokumonRuby word="AD" />
                </div>
                <div className={styles.div}>
                    <GokumonRuby word="4" />
                    <GokumonRuby word="?" />
                    <GokumonRuby word="AF" />
                    <p>？</p>
                </div>
            </>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                いいや、お前さんの弟分になるかもしれねぇ奴さ。
            </p>
        ),
    },
    {
        positionA: character,
        positionB: character,
        character: "芔狭眼",
        text: (
            <>
                <div className={styles.div}>
                    <GokumonRuby word="AE" />
                    <p>！</p>
                </div>
            </>
        ),
    },
    {
        positionC: character,
        character: "芔狭眼",
        text: (
            <>
                <div className={styles.div}>
                    <GokumonRuby word="2" />
                    <GokumonRuby word="AE" />
                    <GokumonRuby word="0" />
                    <p>！</p>
                </div>
            </>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                っと、待て待て、まだ説明の途中だ。
                <br />
                お前さん、此奴が何言ってるか分かんねぇだろ。
            </p>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <>
                <div className={styles.div}>
                    <GokumonRuby word="AE" />
                    <p className={styles.serif}>は部下って意味だ。</p>
                </div>
                <p>見知らぬ単語がありゃ手帳に書いときな。</p>
            </>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                手帳はいつでも見返せるし、好きに書き換えられる。
                <br />
                確信なんぞ無くとも気軽に書いてきゃ良いさ。
            </p>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                思い出しながら書いても良いし…ま、自由にやりな。
            </p>
        ),
    },
    {
        positionA: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                説明は以上だ。
                <br />
                芔狭眼、案内だ。
            </p>
        ),
    },
    {
        positionA: character,
        positionB: character,
        character: "芔狭眼",
        text: <GokumonRuby word="8" />,
    },
    {
        positionA: character,
        positionB: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                あー、っと、最後にもう一つだけ。
                <br />
                ヒトサマの名前ってなぁ間違えちゃいけねぇ。
            </p>
        ),
    },
    {
        positionA: character,
        positionB: character,
        character: "眼殊",
        text: (
            <p className={styles.serif}>
                それだけは分かるようにしといてやるから、くれぐれも間違えてやるなよ。
            </p>
        ),
    },
];
