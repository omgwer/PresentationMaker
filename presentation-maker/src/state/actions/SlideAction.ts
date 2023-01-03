import { Slide } from "../../types/slide/slide"

enum SlideActionType {
    ADD_SLIDE = 'ADD_SLIDE',
    REMOVE_SLIDE = 'REMOVE_SLIDE',
    GET_SLIDES = 'GET_SLIDES'
}

interface AddSlideAction {
    type: SlideActionType.ADD_SLIDE,
    slideUniqueId: Array<string>
}

interface RemoveSlideAction {
    type: SlideActionType.REMOVE_SLIDE,
    slideUniqueId: Array<string>
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