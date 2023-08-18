import 'sonolus.js/play'

import { engine } from './engine/index.js'
import { level } from './level/index.js'

declare global {
    const mode: 'parallel' | 'sequential'
}

export default {
    engine,
    level,
}
