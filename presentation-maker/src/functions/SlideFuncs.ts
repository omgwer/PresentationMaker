import { TextType } from '../types/SlideObjectType'
import { ImageType } from '../types/SlideObjectType'
import { CircleType } from '../types/SlideObjectType'
import { TriangleType } from '../types/SlideObjectType'
import { RectangleType } from '../types/SlideObjectType'
import { Slide, Slides } from '../types/SlideType'
import { SlideObjectContentType } from '../types/SlideObjectType'

function generateId() {
    return Math.random().toString(16).slice(2)
}

function generateEmptySlide(): Slide {
    return {
        id: generateId(),
        objects: []
    }
}

function generateTextBlock(): TextType {
    return {
        id: generateId(),
        contentType: SlideObjectContentType.TEXT,
        positionX: 100,
        positionY: 100,
        isDown: false,
        screenX: 390,
        screenY: 158,
        value: "Текст",
        fontSize: 20,
        fontFamily: "Roboto",
        isBold: false,
        isItalic: false,
        isUnderlined: false,
        fontColor: "black",
        borderColor: "black",
        borderSize: 0
    }
}

function generateImageBlock(): ImageType {
    return {
        id: generateId(),
        contentType: SlideObjectContentType.IMAGE,
        positionX: 100,
        positionY: 100,
        isDown: false,
        screenX: 390,
        screenY: 158,
        href: "",
        height: 150,
        width: 200,
        borderSize: 0,
        borderColor: "black"
    }
}


function generateCircleBlock(): CircleType {
    return {
        id: generateId(),
        contentType: SlideObjectContentType.CIRCLE_FIGURE,
        positionX: 100,
        positionY: 100,
        isDown: false,
        screenX: 390,
        screenY: 158,
        radius: 50,
        fillColor: "#FEEFC3", 
        borderColor: "#FDDB79",
        borderSize: 2
    }
}

function generateTriangleBlock(): TriangleType {
    return {
        id: generateId(),
        contentType: SlideObjectContentType.TRIANGLE_FIGURE,
        positionX: 100,
        positionY: 100,
        isDown: false,
        screenX: 390,
        screenY: 158,
        x1: 150,
        x2: 100,
        x3: 200,
        y1: 100,
        y2: 250,
        y3: 250,
        fillColor: "#FEEFC3", 
        borderColor: "#FDDB79",
        borderSize: 2
    }
}

function generateRectangleBlock(): RectangleType {
    return {
        id: generateId(),
        contentType: SlideObjectContentType.RECTANGLE_FIGURE,
        positionX: 100,
        positionY: 100,
        isDown: false,
        screenX: 390,
        screenY: 158,
        height: 150,
        width: 200,
        fillColor: "#FEEFC3", 
        borderColor: "#FDDB79",
        borderSize: 2
    }
}

function offsetTrianglePoints(pts: any, offset: number) {
    let newPoints = [];
    for (let j = 0; j < pts.length; j++) {
        let i = (j - 1);
        if (i < 0) i += pts.length;
        let k = (j + 1) % pts.length;

        let v1 = [pts[j].x - pts[i].x, pts[j].y - pts[i].y];
        let mag1 = Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1])
        v1 = [v1[0] / mag1, v1[1] / mag1]
        v1 = [v1[0] * offset, v1[1] * offset]
        let n1 = [-v1[1], v1[0]];
        let x1 = pts[i].x + n1[0];
        let y1 = pts[i].y + n1[1];
        let x2 = pts[j].x + n1[0];
        let y2 = pts[j].y + n1[1];

        let v2 = [pts[k].x - pts[j].x, pts[k].y - pts[j].y];
        let mag2 = Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1])
        v2 = [v2[0] / mag2, v2[1] / mag2]
        v2 = [v2[0] * offset, v2[1] * offset]
        let n2 = [-v2[1], v2[0]];
        let x3 = pts[j].x + n2[0];
        let y3 = pts[j].y + n2[1];
        let x4 = pts[k].x + n2[0];
        let y4 = pts[k].y + n2[1];

        let den = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / den;
        let x = x1 + ua * (x2 - x1);
        let y = y1 + ua * (y2 - y1);

        newPoints.push({ x, y });
    }

    return newPoints;
}

export {
    generateId,
    generateEmptySlide,
    generateTextBlock,
    generateImageBlock,
    generateCircleBlock,
    generateTriangleBlock,
    generateRectangleBlock,
    offsetTrianglePoints
}