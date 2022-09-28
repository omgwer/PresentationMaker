import {Doc, GraphicObject, ImageBlock, Page, TextBlock} from "./types";

const textBlock: TextBlock = {
    type: 'text',
    chars: [{
        value: 'h',
        fontSize: 12,
        fontFamily: 'Arial',
        color: '#ff00ff',
    }],
}

const imageBlock: ImageBlock = {
    type: 'image',
    data: 'https://'
}

const graphicBlock: GraphicObject = {
    type: 'graphic',
    data: {},
}

const doc: Doc = {
    pages: [
        [textBlock, imageBlock, graphicBlock]
    ],
}

function addPage(doc: Doc, newPage: Page): Doc {
    return {
        ...doc,
        pages: [
            ...doc.pages,
            newPage,
        ]
    }
}

function deletePage(doc: Doc, index: number): Doc {
    return {
        ...doc,
        pages: doc.pages.filter((_, _index) => _index != index)
    }
}