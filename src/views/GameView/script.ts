import { KEYS } from '@/mod/scenes/keys.js'
import { PreloadScenes } from '@/mod/scenes/PreloadScenes.js'
import Phaser from 'phaser'
import { onMounted } from 'vue'

export default function script(parent: string) {
    onMounted(() => {
        const game = new Phaser.Game({
            parent: parent
        })

        game.scene.add(KEYS.PRELOAD_SCENE, PreloadScenes)
        game.scene.start(KEYS.PRELOAD_SCENE)
    })
}