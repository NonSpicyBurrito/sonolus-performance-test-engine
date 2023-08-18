import { archetypes } from './index.js'

export class Stage extends Archetype {
    hasInput = true

    count = this.entityMemory(Number)

    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        return entityInfos.get(0).state === EntityState.Despawned
    }

    touch() {
        for (const touch of touches) {
            if (!touch.started) continue

            this.spawnNotes()
            return
        }
    }

    spawnNotes() {
        for (let i = 0; i < 100; i++) {
            archetypes.Note.spawn({})
        }

        debug.log((this.count += 100))
    }
}
