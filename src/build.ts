import { emptyDirSync, outputFileSync } from 'fs-extra'

import buildOutput from '.'
import { isParallel } from './isParallel'

const distPath = 'dist'
const levelName = isParallel ? 'Parallel' : 'Sequential'

if (isParallel) {
    emptyDirSync(distPath)
}

outputFileSync(
    `${distPath}/${levelName}-EngineConfiguration-${buildOutput.engine.configuration.hash}`,
    buildOutput.engine.configuration.buffer
)

outputFileSync(
    `${distPath}/${levelName}-EngineData-${buildOutput.engine.data.hash}`,
    buildOutput.engine.data.buffer
)

outputFileSync(
    `${distPath}/${levelName}-LevelData-${buildOutput.level.data.hash}`,
    buildOutput.level.data.buffer
)
