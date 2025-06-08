import Phaser from "phaser";
import { SCENES_KEYS } from "./scenes-keys.js";
import { BATTLE_ASSET_KEY, BATTLE_BACKGROUD_ASSET_KEY, HEALTH_BAR_ASSET_KEY, MONSTER_ASSET_KEY } from "./assets-keys.js";

export class BattleScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENES_KEYS.BATTLE_SCENE
        })
    }

    create() {
        this.add.image(0, 0, BATTLE_BACKGROUD_ASSET_KEY.FOREST).setOrigin(0);
        this.add.image(this.scale.width - 300, 0, MONSTER_ASSET_KEY.CARNODUSK).setOrigin(0);
        this.add.image(0, this.scale.height - 370, MONSTER_ASSET_KEY.IGUANIGNITE).setOrigin(0).setFlipX(true);

        const playerMonsterName = this.add.text(20, 20, MONSTER_ASSET_KEY.IGUANIGNITE, { fontSize: '32px', color: '#7e3d3f', fontStyle: 'bold' })
        this.add.container(556, 318, [
            this.add.image(0, 0, BATTLE_ASSET_KEY.HEALTH_BAR_BACKGROUND).setOrigin(0),
            playerMonsterName,
            this.createHealth(36, 30),
            this.add.text(playerMonsterName.width + 35, 23, 'L5', { fontSize: '28px', color: '#ed474b', fontStyle: 'bold' }),
            this.add.text(30, 55, 'HP', { fontSize: '28px', color: '#ed474b', fontStyle: 'bold' }),
            this.add.text(443, 80, '25/25', { fontSize: '28px', color: '#7e3d3f', fontStyle: 'italic' }).setOrigin(1, 0)
        ])

        const enemyMonsterName = this.add.text(20, 20, MONSTER_ASSET_KEY.CARNODUSK, { fontSize: '32px', color: '#7e3d3f', fontStyle: 'bold' })
        this.add.container(0, 0, [
            this.add.image(0, 0, BATTLE_ASSET_KEY.HEALTH_BAR_BACKGROUND).setOrigin(0),
            enemyMonsterName,
            this.createHealth(36, 30),
            this.add.text(enemyMonsterName.width + 35, 23, 'L5', { fontSize: '28px', color: '#ed474b', fontStyle: 'bold' }),
            this.add.text(30, 55, 'HP', { fontSize: '28px', color: '#ed474b', fontStyle: 'bold' }),
            this.add.text(443, 80, '25/25', { fontSize: '28px', color: '#7e3d3f', fontStyle: 'italic' }).setOrigin(1, 0)
        ])
    }

    private createHealth(x: number, y: number) {
        const scaleY = 0.7
        const leftCap = this.add
            .image(x, y, HEALTH_BAR_ASSET_KEY.LEFT_CAP)
            .setOrigin(0)
            .setScale(1, scaleY)
        const middle = this.add
            .image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEY.MIDDLE_CAP)
            .setOrigin(0)
            .setScale(1, scaleY);
            middle.displayWidth = 360;
        const rightCap = this.add
            .image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEY.RIGHT_CAP)
            .setOrigin(0)
            .setScale(1, scaleY);
        return this.add.container(x, y, [leftCap, middle, rightCap  ]);
    }
}