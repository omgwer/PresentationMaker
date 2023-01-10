export enum TextActionType {
    SET_FONT = 'SET_FONT',
    SET_FONT_SIZE = 'SET_FONT_SIZE',
    SET_FONT_BOLD = 'SET_FONT_BOLD',
    SET_FONT_ITALICS = 'SET_FONT_ITALICS',
    SET_FONT_UNDERLINED = 'SET_FONT_UNDERLINED',
    SET_TEXT_VALUE = 'SET_TEXT_VALUE'
}

interface SetTextFontAction {
    type: TextActionType.SET_FONT,
    fontName: string
}

interface SetTextFontSizeAction {
    type: TextActionType.SET_FONT_SIZE,
    size: number
}

interface SetTextFontBoldAction {
    type: TextActionType.SET_FONT_BOLD,
    value: boolean
}

interface SetTextFontItalicsAction {
    type: TextActionType.SET_FONT_ITALICS,
    value: boolean
}

interface SetTextFontUnderlinedAction {
    type: TextActionType.SET_FONT_UNDERLINED,
    value: boolean
}

interface SetTextValueAction {
    type: TextActionType.SET_TEXT_VALUE,
    value: string
}

export type TextAction = SetTextFontAction | SetTextFontSizeAction | SetTextFontBoldAction | SetTextFontItalicsAction | SetTextFontUnderlinedAction | SetTextValueAction