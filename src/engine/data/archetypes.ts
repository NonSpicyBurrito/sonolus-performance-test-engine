import { defineArchetypes } from 'sonolus.js'
import { scripts } from './scripts'

export const archetypes = defineArchetypes({
    main: {
        script: scripts.mainIndex,
        input: true,
    },
    bread: {
        script: scripts.breadIndex,
    },
})
