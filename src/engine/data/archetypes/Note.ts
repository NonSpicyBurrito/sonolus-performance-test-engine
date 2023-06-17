import { skin } from '../skin.js'

export class Note extends SpawnableArchetype({}) {
    timeOffset = this.entityMemory(Number)

    layout = this.entityMemory(Rect)

    initialize() {
        this.timeOffset = Math.randomFloat(0, Math.PI * 2)

        new Rect({
            l: -0.05,
            r: 0.05,
            b: -0.05,
            t: 0.05,
        })
            .translate(Math.randomFloat(-1, 1), 0)
            .copyTo(this.layout)
    }

    updateSequential() {
        if (mode !== 'sequential') return

        this.render(skin.sprites.sequential)
    }

    updateParallel() {
        if (mode !== 'parallel') return

        this.render(skin.sprites.parallel)
    }

    render(sprite: SkinSprite) {
        const y = Math.sin(time.now + this.timeOffset)

        sprite.draw(this.layout.translate(0, y), 0, 1)
    }
}
