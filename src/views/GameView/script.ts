import Phaser from 'phaser'
import { onMounted } from 'vue'

export default function script(parent: string) {
    onMounted(() => {
        const game = new Phaser.Game({
            parent: parent
        })
    })
}