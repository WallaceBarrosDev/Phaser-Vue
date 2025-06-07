import Phaser from "phaser";
import { KEYS } from "./keys.js";

export class PreloadScenes extends Phaser.Scene {
    constructor() {
        super({
            key: KEYS.PRELOAD_SCENE,
        })        
    }
    
    init() {
        console.log('init')
    }

    preload() {
        console.log('update')
    }

    create() {
        console.log('creat')
    }

    update() {
        console.log('update')
    }
}