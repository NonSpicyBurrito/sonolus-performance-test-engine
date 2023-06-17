import { writeFileSync } from 'node:fs'
import { compressSync } from 'sonolus-core'

const mode = process.argv.includes('--parallel')
    ? 'parallel'
    : process.argv.includes('--sequential')
    ? 'sequential'
    : 'unknown'

/** @type import('sonolus.js').SonolusCLIConfig */
export default {
    esbuild(options) {
        return {
            ...options,

            define: {
                mode: `'${mode}'`,
            },
        }
    },

    export(artifacts) {
        const outputFile = (name, data) =>
            writeFileSync(`./dist/${name}-${mode}`, compressSync(data))

        outputFile('EngineConfiguration', artifacts.engine.configuration)
        outputFile('EngineData', artifacts.engine.data)
        outputFile('LevelData', artifacts.level.data)
    },
}
