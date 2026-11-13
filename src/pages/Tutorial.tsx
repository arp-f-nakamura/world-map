import {
    AUTO,
    GameObjects,
    Game as PhaserGame,
    Scale,
    Scene,
    Structs,
    Types,
} from "phaser";
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/images/background/demo_background.png";
import icon from "../assets/images/icons/demo_icon.png";
import Footer from "../components/Footer";
import { MenuModal } from "../components/modals/MenuModal";
import { GAME_HEIGHT, GAME_WIDTH } from "../constans/displaySize";
import { tutorialSerif } from "../constans/serif";
import { useLanguageData } from "../hooks/useLanguageData";
import styles from "./css_modules/Tutorial.module.css";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
    const navigate = useNavigate();
    const gameContainerRef = useRef<HTMLDivElement>(null);
    const languageData = useLanguageData();
    const initialLanguageDataRef = useRef(languageData);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [stage, setStage] = useState<"word" | "test" | "recollection">(
        "word",
    );

    const [serifIndex, setSerifIndex] = useState(0);

    const currentSerif = tutorialSerif[serifIndex];

    const handleNextSerif = () => {
        if (
            serifIndex + 1 < tutorialSerif.length &&
            serifIndex + 1 !== 6 &&
            serifIndex + 1 !== 18
        ) {
            setSerifIndex(serifIndex + 1);
            if (serifIndex + 2 === 6) {
                setDisplayMenu(true);
                setStage("test");
            }
            if (serifIndex + 2 === 20) {
                setStage("recollection");
            }
        } else if (serifIndex + 1 === tutorialSerif.length) {
            navigate("/");
        }
    };

    if (
        serifIndex + 1 === 18 &&
        languageData !== initialLanguageDataRef.current
    ) {
        setSerifIndex(serifIndex + 1);
        setStage("word");
    }

    useEffect(() => {
        if (!gameContainerRef.current) return;

        class TutorialScene extends Scene {
            private background!: GameObjects.Image;

            constructor() {
                super({ key: "MapAScene" });
            }

            preload() {
                this.load.image("background", backgroundImage);
            }

            create() {
                // 背景画像を追加
                this.background = this.add
                    .image(0, 0, "background")
                    .setOrigin(0.5);

                // 初期表示時にサイズ調整
                this.resizeBackground(this.scale.gameSize);

                // 画面サイズ変更時にも調整
                this.scale.on(Scale.Events.RESIZE, this.resizeBackground, this);
            }

            // 背景画像のリサイズ処理
            private resizeBackground(gameSize: Structs.Size) {
                const { width, height } = gameSize;

                // 画面全体を覆う倍率を計算
                const scale = Math.max(
                    width / this.background.width,
                    height / this.background.height,
                );

                // 背景画像を拡大・縮小
                this.background.setScale(scale);

                // 画面中央に配置
                this.background.setPosition(width / 2, height / 2);
            }
        }

        // Phaserの設定
        const config: Types.Core.GameConfig = {
            type: AUTO,
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            parent: gameContainerRef.current,

            backgroundColor: "#000000",

            scale: {
                mode: Scale.RESIZE,
                autoCenter: Scale.CENTER_BOTH,
            },

            scene: [TutorialScene],
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
            {displayMenu && (
                <div className={styles.gameMenu}>
                    <button
                        onClick={() => {
                            setMenuOpen(true);
                        }}
                    >
                        MENU
                    </button>
                </div>
            )}
            {serifIndex + 1 === 6 && (
                <img src={icon} alt="Icon" className={styles.menuGuide} />
            )}
            {serifIndex + 1 === 18 && (
                <img src={icon} alt="Icon" className={styles.wordGuide} />
            )}
            <div ref={gameContainerRef} className={styles.gameContainer} />
            {/* React：フッター(メッセージウィンドウや移動ボタンを表示) */}
            <Footer
                displayMessage={true}
                serif={currentSerif}
                onClick={handleNextSerif}
            />
            <MenuModal
                isOpen={menuOpen}
                stage={stage}
                onClose={() => {
                    setMenuOpen(false);
                    {
                        serifIndex + 1 === 6 && setSerifIndex(serifIndex + 1);
                    }
                }}
            />
        </div>
    );
};

export default Tutorial;
