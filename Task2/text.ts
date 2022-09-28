import { Text } from "./types";

function changeText(textObject: Text, newText: string) : void { 
    textObject.value = newText;
}

function setFontFamily(textObject: Text, fontFamily: string) : void {
    textObject.fontFamily = fontFamily;
}

function setFontColor(textObject: Text, fontColor: string) : void {
    textObject.fontColor = fontColor;
}

function setFontSize(textObject: Text, fontSize: number) : void {
    textObject.fontSize = fontSize;
}