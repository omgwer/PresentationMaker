export enum ToolbarActionType {
    BACKGROUND_COLOR = 'BACKGROUND_COLOR',
    BORDER_COLOR = 'BORDER_COLOR',
    TEXT_BACKGROUND_COLOR = 'TEXT_BACKGROUND_COLOR',
    TEXT_COLOR = 'TEXT_COLOR'
}

interface SetBackgroundColor {
    type: ToolbarActionType.BACKGROUND_COLOR,
    value: string
}

interface SetBorderColor {
    type: ToolbarActionType.BORDER_COLOR,
    value: string
}

interface SetFontColor {
    type: ToolbarActionType.TEXT_COLOR,
    value: string
}

interface SetBackgroundFontColor {
    type: ToolbarActionType.TEXT_BACKGROUND_COLOR,
    value: string
}


export type ToolbarAction =
    SetBackgroundColor| SetBorderColor | SetFontColor | SetBackgroundFontColor
