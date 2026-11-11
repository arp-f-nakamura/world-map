import { AUTO, Game as PhaserGame, Scale } from "phaser";
import { useEffect, useRef, useState } from "react";
import { GAME_HEIGHT, GAME_WIDTH } from "../constans/displaySize";
import { object1Serif, object2Serif } from "../constans/serif";
import { MapAScene } from "../scenes/MapAScene";
import styles from "./css_modules/Game.module.css";
import Footer from "./Footer";
import { MapBScene } from "../scenes/MapBScene";

export type GameObjectId = "object-1" | "object-2";

type GameProps = {
    onObjectClick?: (objectId: GameObjectId) => void;
};

const Game = ({ onObjectClick }: GameProps) => {
    const gameContainerRef = useRef<HTMLDivElement>(null);
    const [displayMessage, setDisplayMessage] = useState(false); // メッセージ表示の状態を管理するステート
    const [activeObjectId, setActiveObjectId] = useState<GameObjectId | null>(
        null,
    );
    const [serifIndex, setSerifIndex] = useState(0);

    const handleObjectClick = (objectId: GameObjectId) => {
        if (displayMessage) return;

        setActiveObjectId(objectId);
        setSerifIndex(0);
        setDisplayMessage(true);
        onObjectClick?.(objectId);
    };

    // React側のコールバックをPhaserから参照する
    const callbackRef = useRef(handleObjectClick);
    callbackRef.current = handleObjectClick;

    const activeSerif = () => {
        switch (activeObjectId) {
            case "object-1":
                return object1Serif;
            case "object-2":
                return object2Serif;
            default:
                return [];
        }
    };
    const currentSerif = activeSerif()[serifIndex];

    const handleNextSerif = () => {
        if (serifIndex + 1 < activeSerif().length) {
            setSerifIndex(serifIndex + 1);
        } else {
            setDisplayMessage(false);
        }
    };

    useEffect(() => {
        if (!gameContainerRef.current) return;

        // Phaserの設定
        const config: Phaser.Types.Core.GameConfig = {
            type: AUTO,
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            parent: gameContainerRef.current,

            backgroundColor: "#000000",

            scale: {
                mode: Scale.FIT,
                autoCenter: Scale.CENTER_BOTH,
            },

            scene: [
                new MapAScene({ callbackRef }),
                new MapBScene({ callbackRef }),
            ], // Phaserのシーンを指定
        };

        // ゲームインスタンス生成
        const game = new PhaserGame(config);

        // コンポーネント破棄時にPhaserも破棄
        return () => {
            game.destroy(true);
        };
    }, []);

    return (
        <div className={styles.gameRoot}>
            {/* React：メニュー */}
            <div className={styles.gameMenu}>
                <button>MENU</button>
            </div>
            <div ref={gameContainerRef} className={styles.gameContainer} />
            {/* React：フッター(メッセージウィンドウや移動ボタンを表示) */}
            <Footer
                displayMessage={displayMessage}
                character={currentSerif?.character ?? ""}
                serif={currentSerif?.serif}
                onClick={handleNextSerif}
            />
        </div>
    );
};

export default Game;
