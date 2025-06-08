import Phaser from "phaser";
import { SCENES_KEYS } from "./scenes-keys.js";
import { BATTLE_ASSET_KEY, BATTLE_BACKGROUD_ASSET_KEY, HEALTH_BAR_ASSET_KEY, MONSTER_ASSET_KEY } from "./assets-keys.js";

const assetPath = {
    forestBackground: 'images/monster-tamer/battle-backgrounds/forest-background.png',
    healthBarBackground: 'images/kenneys-assets/ui-space-expansion/custom-ui.png',
    leftCap: 'images/kenneys-assets/ui-space-expansion/barHorizontal_green_left.png',
    rightCap: 'images/kenneys-assets/ui-space-expansion/barHorizontal_green_right.png',
    middleCap: 'images/kenneys-assets/ui-space-expansion/barHorizontal_green_mid.png',
    carnodusk: 'images/monster-tamer/monsters/carnodusk.png',
    iguanignite: 'images/monster-tamer/monsters/iguanignite.png'
}

export class PreloadScenes extends Phaser.Scene {
    constructor() {
        super({
            key: SCENES_KEYS.PRELOAD_SCENE,
            active: true
        })
    }

    init() {
        console.log('init')
    }

    preload() {
        this.load.image(BATTLE_ASSET_KEY.HEALTH_BAR_BACKGROUND, assetPath.healthBarBackground);

        this.load.image(HEALTH_BAR_ASSET_KEY.RIGHT_CAP, assetPath.rightCap);

        this.load.image(HEALTH_BAR_ASSET_KEY.MIDDLE_CAP, assetPath.middleCap);

        this.load.image(HEALTH_BAR_ASSET_KEY.LEFT_CAP, assetPath.leftCap);

        this.load.image(MONSTER_ASSET_KEY.CARNODUSK, assetPath.carnodusk);

        this.load.image(MONSTER_ASSET_KEY.IGUANIGNITE, assetPath.iguanignite);

        this.load.image(BATTLE_BACKGROUD_ASSET_KEY.FOREST, assetPath.forestBackground)
    }

    create() {
        console.log('create')
        this.add.image(0, 0, BATTLE_BACKGROUD_ASSET_KEY.FOREST).setOrigin(0);
    }

    // update() {
    //     console.log('update')
    // }
}