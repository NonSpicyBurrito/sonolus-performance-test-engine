import {
    Add,
    And,
    DebugLog,
    EntityMemory,
    HorizontalAlign,
    ScreenAspectRatio,
    Spawn,
    SScript,
    Subtract,
    TouchStarted,
    UIMenu,
} from 'sonolus.js'
import { scripts } from '.'

export function main(): SScript {
    const preprocess = UIMenu.set(
        Subtract(0.05, ScreenAspectRatio),
        0.95,
        0,
        1,
        0.15,
        0.15,
        0,
        1,
        HorizontalAlign.Center,
        true
    )

    const counter = EntityMemory.to<number>(0)

    const spawnCountPerTap = 100

    const touch = And(TouchStarted, [
        counter.set(Add(counter, spawnCountPerTap)),
        DebugLog(counter),
        new Array(spawnCountPerTap).fill(Spawn(scripts.breadIndex, [])),
    ])

    return {
        preprocess: {
            code: preprocess,
        },
        touch: {
            code: touch,
        },
    }
}
