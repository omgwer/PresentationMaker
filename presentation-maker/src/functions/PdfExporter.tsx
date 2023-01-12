import * as jsPDF from "jspdf";
import {Presentation} from "../types/PresentationType";
import html2Canvas from "html2canvas"
import {GenerateSvg} from "./SvgGenerator";
import {SlideProps} from "../types/SlideType";
import {renderToStaticMarkup} from "react-dom/server"
import {ReactElement} from "react";

let _width = 1525;
let _heigth = 729;

let pdf = new jsPDF.jsPDF('l', 'px', [_width, _heigth]);
let canvases: HTMLCanvasElement[] = [];

function convertJSXElemToHtmlElem(reactElement: ReactElement): HTMLElement {
    const output = document.createElement('p')
    const staticElement = renderToStaticMarkup(<>test</>);
    output.innerHTML = staticElement;
    return output;
}

export function pdfConvertor(presentation: Presentation) {
    let slideIndex: number = 0;
    let arraySlidesHTML = [];
    for (const slide of presentation.slides) {
        let props: SlideProps = {
            backgroundColor: slide.backgroundColor,
            backgroundImage: slide.backgroundImage,
            slideId: slide.id,
            slideIndex: slideIndex,
            viewPort: ''
        }
        slideIndex++;

        let tmp: ReactElement = <GenerateSvg props={props}/>;
        let tmp2: HTMLElement = convertJSXElemToHtmlElem(tmp);
        arraySlidesHTML.push(tmp2);
    }
   // let test: HTMLCollection = [...arraySlidesHTML];

   // convert(arraySlidesHTML);
    buildPdf(canvases);
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

    pdf.save(`test.pdf`);
}

async function convert(slides: HTMLCollection): Promise<HTMLCanvasElement[]> {
    let canvases: HTMLCanvasElement[] = [];

    for (let i = 0; i < slides.length; i++) {
        let slide: HTMLElement = slides.item(i)!.cloneNode(true) as HTMLElement;

        slide.style.transform = 'none';
        slide.style.borderStyle = 'hidden';
        slide.style.position = 'absolute';
        slide.style.right = '99999px';
        slide.style.border = '999999px';

        document.body.appendChild(slide);

        let canvas = await html2Canvas(slide);
        canvases.push(canvas);

        document.body.removeChild(slide);
    }

    return canvases;
}
