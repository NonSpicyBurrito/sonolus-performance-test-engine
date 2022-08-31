import { outputFileSync } from 'fs-extra'
import { buildOutput } from '.'
import { isParallel } from './is-parallel'

const distPath = 'dist'
const levelName = isParallel ? 'Parallel' : 'Sequential'

outputFileSync(
    `${distPath}/${levelName}-EngineConfiguration`,
    buildOutput.engine.configuration.buffer
)

outputFileSync(
    `${distPath}/${levelName}-EngineData`,
    buildOutput.engine.data.buffer
)

outputFileSync(
    `${distPath}/${levelName}-LevelData`,
    buildOutput.level.data.buffer
)
