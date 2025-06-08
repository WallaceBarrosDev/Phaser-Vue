import { SCENES_KEYS } from '@/mod/scenes/scenes-keys.js'
import { PreloadScenes } from '@/mod/scenes/PreloadScenes.js'
import Phaser from 'phaser'
import { onBeforeUnmount, onMounted } from 'vue'

export default function script(parent: string) {
    let game: Phaser.Game | null = null

    onMounted(() => {
        game = new Phaser.Game({
            width: window.innerWidth,
            height: window.innerHeight,
            parent: parent,
            scene: PreloadScenes
        })

        // game.scene.add(KEYS.PRELOAD_SCENE, PreloadScenes)
        // game.scene.start(KEYS.PRELOAD_SCENE)
    })

    onBeforeUnmount(() => {
        if (game) {
            game.destroy(true)
            game = null
        }
    })
}