// Function to convertTextToPDF
function convertTextToPDF() {
  printJS({
           printable: 'main-content',
           type: 'html',
           css: 'https://opengovsg.github.io/opendoc-theme/assets/main.css',
           scanStyles: false,
           style: "body{ font-family: 'Source Sans Pro'}"
       });
}

// Add event listener to Save PDF button
var pdfButton = document.getElementById("convert-to-pdf");
pdfButton.addEventListener("click",convertTextToPDF, false);

//Give the pdf file name that corresponds to the document
