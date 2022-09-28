type Char = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
}

type TextBlock = {
    type: 'text',
    chars: Array<Char>
}

type ImageBlock = {
    type: 'image',
    data: string,
}

type GraphicObject = {
    type: 'graphic',
    data: Object,
}

type Page = Array<TextBlock|ImageBlock|GraphicObject>

type Doc = {
    pages: Array<Page>
}

export {
    Doc,
    Page,
    TextBlock,
    ImageBlock,
    GraphicObject,
    Char,
}