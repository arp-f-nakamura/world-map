import { Scene } from "phaser";
import backgroundImage from "../assets/images/background/demo_background.png";
import { GAME_HEIGHT, GAME_WIDTH } from "../constans/displaySize";
import { GameObjectId } from "../components/Game";

type MapBSceneProps = {
    callbackRef: React.RefObject<(objectId: GameObjectId) => void>;
};

// マップB
export class MapBScene extends Scene {
    private readonly props: MapBSceneProps;

    constructor(props: MapBSceneProps) {
        super({ key: "MapBScene" });
        this.props = props;
    }

    preload() {
        this.load.image("background", backgroundImage);
    }

    create() {
        this.add
            .image(GAME_WIDTH / 2, GAME_HEIGHT / 2, "background")
            .setDisplaySize(GAME_WIDTH, GAME_HEIGHT);

        // 仮オブジェクト①
        this.createGameObject(250, 450, "OBJECT 1", "object-1");

        // マップBへの移動オブジェクト
        const door = this.add
            .rectangle(100, 1200, 140, 100, 0x3498db)
            .setInteractive();

        door.on("pointerdown", () => {
            // マップAに切り替える
            this.scene.start("MapAScene");
        });
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
            this.props.callbackRef.current?.(objectId);
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
