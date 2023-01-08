export enum ToolbarActionType {
    OPEN_PALETTE = 'OPEN_PALETTE',
    CLOSE_PALETTE = 'CLOSE_PALETTE'
}

interface OpenPaletteAction {
    type: ToolbarActionType.OPEN_PALETTE,
    objectId: string
}

interface ClosePaletteAction {
    type: ToolbarActionType.CLOSE_PALETTE,
    objectId: string
}


export type ToolbarAction =
    OpenPaletteAction
    | ClosePaletteAction