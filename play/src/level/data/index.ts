import { LevelData } from 'sonolus-core'
import { archetypes } from '../../engine/playData/archetypes/index.js'

export const data: LevelData = {
    bgmOffset: 0,
    entities: [
        {
            archetype: archetypes.Initialization.name,
            data: [],
        },
        {
            archetype: archetypes.Stage.name,
            data: [],
        },
    ],
}
