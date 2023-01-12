import { Presentation } from "../types/PresentationType";
import { Template, BLANK_PDF } from '@pdfme/generator';

function getSlides():any {
    return {}
}
export function GeneratePdf(presentation: Presentation) {
    let template:Template = {
        basePdf:BLANK_PDF,
        schemas: [
            getSlides()
        ]
    }
}