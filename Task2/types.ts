
type Text = {
    type: 'text',
    value: string,
    fontSize: number,
    fontFamily: string,
    fontColor: string
}

type Image = {
    type: 'image', // спросить почему тип можно оставить "image"
    data: string,
}

type Figure = {
    type: 'graphic', // задать вопрос зачем?
    data: object,
    backgroundColor: string,
    borderColor: string
}

type SlideObject = {
    type : Text|Image|Figure,
    positionX : number,
    positionY : number,
    zIndex: number,
    length: number,
    heigth: number
}

type SelectionObject = {
    type : SlideObject
}

type Slide = {
    objects : Array<SlideObject>
    backgroundColor : string,
    backgroundImage : string
}

type Presentation = {
    presentation : Array<Slide>
    name : string
}

type History = {
    history: Array<string>
}

export {    
    Text,
    Image,
    Figure,
    SlideObject,
    SelectionObject,
    Slide,
    Presentation,
    History
}