import Phaser from "phaser";
import { SCENES_KEYS } from "./scenes-keys.js";
import { BATTLE_ASSET_KEY, BATTLE_BACKGROUD_ASSET_KEY, MONSTER_ASSET_KEY } from "./assets-keys.js";

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
    }
}