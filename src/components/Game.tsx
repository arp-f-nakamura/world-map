import { useEffect, useRef } from "react";
import { AUTO, Game as PhaserGame, Scale, Scene } from "phaser";
import styles from "./css_modules/Game.module.css";

import backgroundImage from "../images/background/demo_background.png";

type GameObjectId = "object-1" | "object-2";

type GameProps = {
    onObjectClick?: (objectId: GameObjectId) => void;
};

const GAME_WIDTH = 750;
const GAME_HEIGHT = 1334;

const Game = ({ onObjectClick }: GameProps) => {
    const gameContainerRef = useRef<HTMLDivElement>(null);

    // React側のコールバックをPhaserから参照する
    const callbackRef = useRef(onObjectClick);
    callbackRef.current = onObjectClick;

    useEffect(() => {
        if (!gameContainerRef.current) return;

        // PhaserのScene
        class GameScene extends Scene {
            constructor() {
                super({ key: "GameScene" });
            }

            preload() {
                // 背景画像を読み込む
                this.load.image("background", backgroundImage);
            }

            create() {
                // 背景画像を配置
                this.add
                    .image(GAME_WIDTH / 2, GAME_HEIGHT / 2, "background")
                    .setDisplaySize(GAME_WIDTH, GAME_HEIGHT);

                // 仮オブジェクト①
                this.createGameObject(250, 450, "OBJECT 1", "object-1");

                // 仮オブジェクト②
                this.createGameObject(500, 800, "OBJECT 2", "object-2");
            }

            // オブジェクト生成処理
            createGameObject(
                x: number,
                y: number,
                label: string,
                objectId: GameObjectId,
            ) {
                // クリック判定を持つ矩形
                const object = this.add
                    .rectangle(x, y, 140, 100, 0x3498db, 0.8)
                    .setStrokeStyle(4, 0xffffff)
                    .setInteractive({ useHandCursor: true });

                // オブジェクト名
                this.add
                    .text(x, y, label, {
                        fontSize: "22px",
                        color: "#ffffff",
                        fontStyle: "bold",
                    })
                    .setOrigin(0.5);

                // クリックイベント
                object.on("pointerdown", () => {
                    console.log(`${label} clicked`);

                    callbackRef.current?.(objectId);
                });

                // ホバー時の色変更
                object.on("pointerover", () => {
                    object.setFillStyle(0xe67e22, 0.9);
                });

                object.on("pointerout", () => {
                    object.setFillStyle(0x3498db, 0.8);
                });
            }
        }

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

            scene: [GameScene],
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
            {/* React：メッセージウィンドウ */}
            <div className={styles.messageWindow}>
                <p>ここにメッセージを表示します。</p>
            </div>
        </div>
    );
};

export default Game;
