import {
    Add,
    Draw,
    EntityMemory,
    Random,
    Sin,
    SkinSprite,
    SScript,
    Subtract,
    Time,
} from 'sonolus.js'
import { isParallel } from '../../../isParallel'

export function bread(): SScript {
    const left = EntityMemory.to<number>(0)
    const right = EntityMemory.to<number>(1)
    const timeOffset = EntityMemory.to<number>(2)
    const yCenter = EntityMemory.to<number>(3)

    const initialize = [
        left.set(Subtract(Random(-1, 1), 0.05)),
        right.set(Add(left, 0.1)),
        timeOffset.set(Random(0, 2 * Math.PI)),
    ]

    const update = [
        yCenter.set(Sin(Add(Time, timeOffset))),
        Draw(
            SkinSprite.NoteHeadRed,
            left,
            Subtract(yCenter, 0.05),
            left,
            Add(yCenter, 0.05),
            right,
            Add(yCenter, 0.05),
            right,
            Subtract(yCenter, 0.05),
            0,
            1
        ),
    ]

    return {
        initialize: {
            code: initialize,
        },
        [isParallel ? 'updateParallel' : 'updateSequential']: {
            code: update,
        },
    }
}
