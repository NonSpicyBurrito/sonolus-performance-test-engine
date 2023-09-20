import 'sonolus.js/play'

import { level } from '../../shared/src/level/index.js'
import { engine } from './engine/index.js'

declare global {
    const mode: 'parallel' | 'sequential'
}

export default {
    engine,
    level,
}
