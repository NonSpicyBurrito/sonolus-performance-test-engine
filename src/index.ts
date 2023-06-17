import 'sonolus.js'

import { engine } from './engine/index.js'
import { level } from './level/index.js'

declare global {
    const mode: 'parallel' | 'sequential' | 'unknown'
}

export default {
    engine,
    level,
}
