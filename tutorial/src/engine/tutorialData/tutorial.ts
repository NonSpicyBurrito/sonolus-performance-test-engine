import { instruction } from './instruction.js'

let index = tutorialMemory(Number)

const preprocess = () => {
    const gap = 0.05
    const uiRect = screen.rect.shrink(gap, gap)

    ui.menu.set({
        anchor: uiRect.lt,
        pivot: { x: 0, y: 1 },
        size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
        rotation: 0,
        alpha: ui.configuration.menu.alpha,
        background: true,
    })

    ui.navigation.previous.set({
        anchor: uiRect.cl,
        pivot: { x: 0, y: 0.5 },
        size: new Vec(0.15, 0.15).mul(ui.configuration.navigation.scale),
        rotation: 0,
        alpha: ui.configuration.navigation.alpha,
        background: true,
    })
    ui.navigation.next.set({
        anchor: uiRect.cr,
        pivot: { x: 1, y: 0.5 },
        size: new Vec(0.15, 0.15).mul(ui.configuration.navigation.scale),
        rotation: 0,
        alpha: ui.configuration.navigation.alpha,
        background: true,
    })

    ui.instruction.set({
        anchor: Vec.zero,
        pivot: { x: 0.5, y: 0.5 },
        size: new Vec(1.2, 0.15).mul(ui.configuration.instruction.scale),
        rotation: 0,
        alpha: ui.configuration.instruction.alpha,
        background: true,
    })
}

const navigate = () => {
    index = (index + navigation.direction) % instruction.texts.length
}

const update = () => {
    for (const [i, text] of instruction.texts.entries()) {
        if (i !== index) continue

        instruction.texts.show(text.id as never)
    }
}

export const tutorial = {
    preprocess: [preprocess],

    navigate: [navigate],

    update: [update],
}
