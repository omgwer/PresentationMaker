export enum TextActionType {
    SET_FONT = 'SET_FONT',
    SET_FONT_SIZE = 'SET_FONT_SIZE',
    SET_FONT_BOLD = 'SET_FONT_BOLD',
    SET_FONT_ITALICS = 'SET_FONT_ITALICS',
    SET_FONT_UNDERLINED = 'SET_FONT_UNDERLINED'
}

interface SetTextFontAction {
    type: TextActionType.SET_FONT,
    fontName: string
}

interface SetTextFontSizeAction {
    type: TextActionType.SET_FONT_SIZE,
    size: number
}

interface SetTextFontBold {
    type: TextActionType.SET_FONT_BOLD,
    value: boolean
}

interface SetTextFontItalics {
    type: TextActionType.SET_FONT_ITALICS,
    value: boolean
}

interface SetTextFontUnderlined {
    type: TextActionType.SET_FONT_UNDERLINED,
    value: boolean
}

export type TextAction = SetTextFontAction | SetTextFontSizeAction | SetTextFontBold | SetTextFontItalics | SetTextFontUnderlined