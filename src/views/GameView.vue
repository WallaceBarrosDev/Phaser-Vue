<script setup lang="ts">
import Phaser from 'phaser'
import { onMounted, onBeforeUnmount } from 'vue'

let game: Phaser.Game | null = null

const styleGame = {
    backgroundColor: '#1b1f25',
    color: '#25e474',
}

onMounted(() => {
    const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-container',
        backgroundColor: styleGame.backgroundColor,
        scene: {
            preload() {
            },
            create() {
                this.add.text(100, 100, 'Hello Phaser + Vue!', {
                    font: '32px Arial',
                    color: styleGame.color,
                })
            },
        },
    }

    game = new Phaser.Game(config)
})


onBeforeUnmount(() => {
    if (game) {
        game.destroy(true)
        game = null
    }
})
</script>

<template>
    <div id="phaser-container" />
</template>

<style scoped>
#phaser-container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>