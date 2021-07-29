import { build } from 'sonolus.js'
import engineConfiguration from './engine/configuration'
import engineData from './engine/data'
import levelData from './level/data'

export default build({
    engine: {
        configuration: engineConfiguration,
        data: engineData,
    },

    level: {
        data: levelData,
    },
})
