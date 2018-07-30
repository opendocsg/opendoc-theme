---
# Jekyll front matter needed to trigger coffee compilation
---

// open export.html in new tab where print modal is triggered once loaded
function redirect() {
  let pathArray = window.location.pathname.split('/');
  let url;
  if (pathArray.length >= 2) {
    pathArray.pop(); //remove the last item
    pathArray.push("export.html") //add in the last
    let newPath = pathArray.join('/');
    url = "http://" + window.location.host + newPath;
  } else {
    url = "http://" + window.location.host + "export.html";
  }
  window.open(url, '_blank');
}

// Add event listener to Save PDF button
var pdfButton = document.getElementById("convert-to-pdf");
pdfButton.addEventListener("click",redirect, false);
