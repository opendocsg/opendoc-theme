// Get content from DOM
var content = document.getElementById('main-content');
console.log(content.innerHTML);


// Function to convertTextToPDF
function convertTextToPDF() {
  var doc = new jsPDF('p','mm','a4');
  doc.fromHTML(content.innerHTML, 10, 10)
  doc.save('a4.pdf')
  console.log('yay')
}

// Add event listener to Save PDF button
var clickPDF = document.getElementById("convert-to-pdf");
clickPDF.addEventListener("click",convertTextToPDF, false);
