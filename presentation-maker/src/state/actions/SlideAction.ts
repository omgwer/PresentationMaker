import { Slide } from "../../types/slide/slide"

enum SlideActionType {
    ADD_SLIDE = 'ADD_SLIDE',
    REMOVE_SLIDE = 'ADD_SLIDE',
    GET_SLIDES = 'GET_SLIDES'
}

interface AddSlideAction {
    type: SlideActionType.ADD_SLIDE,
    slideIndex?: number
}

interface RemoveSlideAction {
    type: SlideActionType.REMOVE_SLIDE,
    slideIndex: number
}

interface GetSlidesAction {
    type: SlideActionType.GET_SLIDES,
    slideIndex?:number
}

type SlideAction = AddSlideAction | RemoveSlideAction | GetSlidesAction

export {
    SlideActionType,
    type SlideAction
}