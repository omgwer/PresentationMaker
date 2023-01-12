import * as jsPDF from "jspdf";
import { Presentation } from "../types/PresentationType";
import html2Canvas from "html2canvas"
import {GenerateSvg, SvgGeneratorProps} from "./SvgGenerator";
import {SlideProps} from "../types/SlideType";
import { renderToStaticMarkup } from "react-dom/server"

let _width = 1525;
let _heigth = 729;

let pdf = new jsPDF.jsPDF('l', 'px', [_width, _heigth]);
let canvases: HTMLCanvasElement[] = [];

function convertJSXElemToHtmlElem(reactElement:JSX.Element):HTMLElement {
    const output = document.createElement('p')
    const staticElement = renderToStaticMarkup(reactElement)
    output.innerHTML = staticElement;
    return output;
}

function buildPdf(canvases: HTMLCanvasElement[]) {

    for (let i = 0; i < canvases.length; i++) {
        let canvas = canvases[i];

        let image: string = canvas.toDataURL('image/png');
        pdf.addImage(image, 'PNG', 0, 0, _width, _heigth);

        if (i < canvases.length - 1) {
            pdf.addPage();
        }
    }
}

async function convert(slide: HTMLElement) {
    slide.style.transform = 'none';
    slide.style.borderStyle = 'hidden';
    slide.style.position = 'absolute';
    slide.style.right = '99999px';
    slide.style.border = '999999px';

        //document.body.appendChild(slide);

    let canvas = await html2Canvas(slide);
    canvases.push(canvas);

    document.body.removeChild(slide);
}

export function GeneratePdf(presentation: Presentation) {
    let slideIndex:number = 0;
    presentation.slides.forEach(slide => {
        let props:SlideProps = {
            backgroundColor:slide.backgroundColor,
            backgroundImage:slide.backgroundImage,
            slideId:slide.id,
            slideIndex:slideIndex,
            viewPort: ''
        }
        slideIndex++;
        let emptyFunction:Function = () => {};

        let tmp = <GenerateSvg props={props} />;
        let tmp2 = convertJSXElemToHtmlElem(tmp);
        convert(tmp2);
    })
    //convert(slides).then((canvases: HTMLCanvasElement[]) => buildPdf(canvases));
    pdf.save(`${presentation.name}.pdf`);
}
