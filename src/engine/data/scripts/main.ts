import {
    Add,
    And,
    Code,
    DebugLog,
    EntityMemory,
    HorizontalAlign,
    ScreenAspectRatio,
    Spawn,
    SScript,
    Subtract,
    TouchStarted,
    UIMenu,
    VerticalAlign,
} from 'sonolus.js'

const preprocess: Code = UIMenu.set(
    Subtract(0.05, ScreenAspectRatio),
    0.95,
    0,
    1,
    0.15,
    0.15,
    0,
    1,
    HorizontalAlign.Center,
    VerticalAlign.Middle,
    true
)

const counter = EntityMemory.to<number>(0)

const spawnCountPerTap = 100
const breadId = 1

const touch: Code = And(TouchStarted, [
    counter.set(Add(counter, spawnCountPerTap)),
    DebugLog(counter),
    new Array(spawnCountPerTap).fill(Spawn(breadId, [])),
])

export default {
    preprocess: {
        code: preprocess,
    },
    touch: {
        code: touch,
    },
} as SScript
