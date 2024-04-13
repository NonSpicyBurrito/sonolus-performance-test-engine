import { writeFileSync } from 'node:fs'
import { compressSync } from '@sonolus/core'

/** @return {import('@sonolus/sonolus.js').SonolusCLIConfig} */
export const createConfig = (mode) => ({
    type: 'play',

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
            writeFileSync(
                this.mode === 'build' ? `./dist/${name}-${mode}` : `./.dev/${name}`,
                compressSync(data),
            )

        outputFile('EngineConfiguration', artifacts.engine.configuration)
        outputFile('EnginePlayData', artifacts.engine.playData)
        outputFile('LevelData', artifacts.level.data)
    },
})
