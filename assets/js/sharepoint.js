//Switch all .html references to .aspx for use in Sharepoint
$(document).ready(function() {
  $("a[href$='.html']").each(function(index,element) {
    element.href = element.href.replace('.html','.aspx');
  });
});