// Get content from DOM
var content = document.getElementById('main-content');

var margins = {
    top: 20,
    left: 15,
    width: 160
  };

// Function to convertTextToPDF
function convertTextToPDF() {
  var doc = new jsPDF('p','mm','a4');
  doc.fromHTML(
    content,
    margins.top,
    margins.left,
    {
  		'width': margins.width // max width of content on PDF
  	},
  );
  doc.save('a4.pdf');
  console.log('yay')
}

// Add event listener to Save PDF button
var clickPDF = document.getElementById("convert-to-pdf");
clickPDF.addEventListener("click",convertTextToPDF, false);

//Give the pdf file name that corresponds to the document
