import {Text} from "../types/slideObjects/Text"

function generateNewText(): Text {
    return {
        value: 'Введите текст',
        fontSize: 12,
        fontFamily: 'Times New Roman',
        fontColor: 'Black'
    };
}

export {
    generateNewText
}