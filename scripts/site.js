//PDFJS.disableWorker = ;
PDFJS.getDocument('alphatrans.pdf').then(function(pdf){
    // Fetch the page.
    pdf.getPage(1).then(function (page) {

      // Prepare canvas using PDF page dimensions.
      var containerColumn = document.getElementById('pdfContainer');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      canvas.height = containerColumn.clientHeight;
      canvas.width = containerColumn.clientWidth;

      var unscaledViewport = page.getViewport(1);
      var scale = Math.min((canvas.height / unscaledViewport.height), (canvas.width / unscaledViewport.width));
      var viewport = page.getViewport(scale);
      
      // Render PDF page into canvas context.
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });