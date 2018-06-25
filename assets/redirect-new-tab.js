---
# Jekyll front matter needed to trigger coffee compilation
---

// open export.html in new tab where print modal is triggered once loaded
function redirect() {
  window.open("http://" + window.location.host + "/export.html", '_blank');
}

// Add event listener to Save PDF button
var pdfButton = document.getElementById("convert-to-pdf");
pdfButton.addEventListener("click",redirect, false);
