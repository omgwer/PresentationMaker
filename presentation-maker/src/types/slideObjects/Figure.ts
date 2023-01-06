import {Polygon} from "./figureObjects/Polygon";
import {Ellipse} from "./figureObjects/Ellipse";
import {Circle} from "./figureObjects/Circle";

type Figure = {
    content: Polygon | Ellipse | Circle,
    backgroundColor: string,
    borderColor: string
}

export {
    type Figure
}