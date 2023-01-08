export enum TextActionType {
    SET_FONT = 'SET_FONT'
}

interface SetTextFontAction {
    type: TextActionType.SET_FONT,
    fontName: string
}

export type TextAction = SetTextFontAction