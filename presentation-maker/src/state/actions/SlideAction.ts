enum SlideActionType {
    ADD_SLIDE = 'ADD_SLIDE',
    REMOVE_SLIDE = 'ADD_SLIDE'
}

interface AddSlideAction {
    type: SlideActionType.ADD_SLIDE,
    slideIndex?: number
}

interface RemoveSlideAction {
    type: SlideActionType.REMOVE_SLIDE,
    slideIndex: number
}

type SlideAction = AddSlideAction | RemoveSlideAction

export {
    SlideActionType,
    type SlideAction
}