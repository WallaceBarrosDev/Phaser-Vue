import { SCENES_KEYS } from '@/mod/scenes/scenes-keys.js'
import { PreloadScene } from '@/mod/scenes/PreloadScene.js'
import Phaser from 'phaser'
import { onBeforeUnmount, onMounted } from 'vue'
import { BattleScene } from '@/mod/scenes/BattleScene.js'

export default function script(parent: string) {
    let game: Phaser.Game | null = null

    onMounted(() => {
        game = new Phaser.Game({
            type: Phaser.CANVAS,
            pixelArt: false,
            scale: {
                parent: parent,
                width: 1024,
                height: 576,
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            // backgroundColor: '#252525'
            backgroundColor: '#090'
        })

        game.scene.add(SCENES_KEYS.PRELOAD_SCENE, PreloadScene)
        game.scene.add(SCENES_KEYS.BATTLE_SCENE, BattleScene)
        game.scene.start(SCENES_KEYS.PRELOAD_SCENE)
    })

    onBeforeUnmount(() => {
        if (game) {
            game.destroy(true)
            game = null
        }
    })
}