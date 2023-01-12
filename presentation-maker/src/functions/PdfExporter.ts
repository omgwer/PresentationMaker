import {Presentation} from "../types/PresentationType";
import pdfkit from "pdfkit"

function getSlides(): any {
    return {}
}

export function GeneratePdf(presentation: Presentation) {
    // require dependencies
    //let PDFDocument = require('pdfkit');
    let blobStream = require('blob-stream');
    // create a document the same way as above
    let doc = new pdfkit;
    // pipe the document to a blob
    let stream = doc.pipe(blobStream());
    // add your content to the document here, as usual
    doc.addPage();
    // get a blob when you're done
    doc.end();
    stream.on('finish', function () {
        // get a blob you can do whatever you like with
        const blob = stream.toBlob('application/pdf')
        let link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", presentation.name + ".json");
        link.click();
    });
}